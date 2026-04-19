import {
  After,
  AfterAll,
  AfterStep,
  Before,
  BeforeAll,
  setDefaultTimeout
} from "@cucumber/cucumber";

import { chromium, firefox, webkit } from "@playwright/test";
import { getEnv } from "../helper/env/env";
import * as os from "os";
setDefaultTimeout(270000);

// Flags globales (si decides seguir usándolas)
//global.executionWith1Login = false;
//global.executionWithChrome = true;

let chromeDir = "";

if (os.platform().includes("win")) {
  chromeDir = "%LOCALAPPDATA%\\Google\\Chrome\\User Data\\Default";
} else {
  chromeDir = "~/.config/chromium";
}

const TAG = "@chrome";

const options = {
  headless: false,
  timeout: 70000,
  slowMo: 100,
  ignoreHTTPSErrors: true,
  acceptInsecureCerts: true,
  args: [
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--disable-web-security",
    "--allow-insecure-localhost",
    "--ignore-certificate-errors"
  ],
  firefoxUserPrefs: {
    "media.navigator.streams.fake": true,
    "media.navigator.permission.disabled": true
  }
};

enum BROWSER {
  FIREFOX = "firefox",
  CHROME = "chrome",
  SAFARI = "safari"
}

let browser: any;
let context: any;

BeforeAll(async function () {
  getEnv();
  console.log("before all ...");

  if (TAG.includes(BROWSER.CHROME)) {
    browser = await chromium.launch(options);
  } else if (TAG.includes(BROWSER.FIREFOX)) {
    browser = await firefox.launch(options);
  } else if (TAG.includes(BROWSER.SAFARI)) {
    browser = await webkit.launch(options);
  } else {
    browser = await chromium.launch(options);
  }
});

Before(async function () {
  console.log("before scenario ...");

  context = await browser.newContext();
  this.page = await context.newPage();
});

AfterStep(async function () {
  const img = await this.page.screenshot({ type: "png" });
  await this.attach(img, "image/png");
});

After(async function () {
  console.log("after scenario ...");

  await this.page?.close();
  await context?.close();
});

AfterAll(async function () {
  console.log("after all ...");

  await browser?.close();
});