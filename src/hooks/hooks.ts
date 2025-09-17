import { After, AfterAll, AfterStep, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { invokeBrowser } from "../helper/browsers/browserManager";
const os = require('os');
import { getEnv } from "../helper/env/env";
const { chromium, firefox, webkit } = require('@playwright/test')


setDefaultTimeout(270000);
//condición para ejecución con 1 solo login
global.executionWith1Login = false;
//condición para ejecución con Chrome
global.executionWithChrome = true;

let chromeDir = "";
if (os.platform().includes("win")) {
  chromeDir = "%LOCALAPPDATA%\\Google\\Chrome\\User Data\\Default";
}
else {
  chromeDir = "~/.config/chromium"
}

const TAG = "@chrome"
const options = {
  headless: false,
  timeout: 70000,
  slowMo: 100,
  ignoreHTTPSErrors: true,
  acceptInsecureCerts: true,
  args: [
    "--use-fake-ui-for-media-stream",
    "--use-fake-device-for-media-stream",
    "--no-sandbox",
    "--no-zygote",
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-setuid-sandbox',
    '--no-first-run',
    '--deterministic-fetch',
    '--disable-features=IsolateOrigins',
    '--disable-site-isolation-trials',
    '--disable-web-security',
    '--allow-file-access-from-files',
    '--disable-web-security',
    '--disable-web-security',
    '--allow-insecure-localhost',
    '--ignore-certificate-errors',
    '--no-sandbox',
    '-–allow-file-access-from-files'


  ],
  firefoxUserPrefs: {
    "media.navigator.streams.fake": true,
    "media.navigator.permission.disabled": true,
  },

};

export const config = {
  options,
  IMG_THRESHOLD: { threshold: 0.4 }
};

enum BROWSER {
  FIREFOX = "firefox",
  CHROME = "chrome",
  SAFARI = "safari"
}

BeforeAll(async function () {
    getEnv();
    console.log("before all ...");
    if (TAG.includes(BROWSER.CHROME)) {
      if (global.executionWithChrome) {
        if (global.executionWith1Login)
          global.browser = await chromium.launchPersistentContext(chromeDir, options);
      } else
        global.browser = await chromium.launch(options);
    } else if (TAG.includes(BROWSER.FIREFOX)) {
      global.browser = await firefox.launch(options);
    } else if (TAG.includes(BROWSER.SAFARI)) {
      global.browser = await webkit.launch(options);
    } else {
      global.browser = await chromium.launch(options);
    }
    if (global.executionWith1Login) {
      if (!global.executionWithChrome)
        global.context = await global.browser.newContext();
      global.page = await global.browser.newPage();
    }
});

Before(async function () {
    console.log("before ...");
  if (!global.executionWith1Login) {
    if (global.executionWithChrome)
      global.browser = await chromium.launchPersistentContext(chromeDir, options);
    else
      global.context = await global.browser.newContext();
    global.page = await global.browser.newPage();
  }
});

After(async function () {
    console.log("after pass...");
    if (!global.executionWith1Login) {
      await global.page.close();
      if (!global.executionWithChrome)
        await global.context.close();
      else
        await global.browser.close();
    }
});

AfterAll(async function () {
   console.log("after all ...");
  if (!(!global.executionWith1Login && global.executionWithChrome))
    await global.browser.close();
});

AfterStep(async function () {
    const img = await global.page.screenshot({ type: "png" });
    await this.attach(img, "image/png");
})


