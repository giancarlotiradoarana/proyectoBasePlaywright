import { Page, expect } from "@playwright/test";

export default class LoginPage {

    constructor(private page: Page) {}

    private Elements = {
        userNameInput: "//*[@id='user-name']",
        passwordInput: "//*[@id='password']",
        loginInput: "//*[@id='login-button']",
        productLbl: "//span[contains(text(),'Products')]",
        msgBlockedLbl: "//h3[@data-test='error']",
    };

    async navigate() {
        await this.page.goto(process.env.BASEURL!, { timeout: 6000 });
    }

    async enterCredentials() {
        await this.page.fill(this.Elements.userNameInput, process.env.SAUCE_USERNAME!);
        await this.page.waitForTimeout(1000);
        await this.page.fill(this.Elements.passwordInput, process.env.SAUCE_PASSWORD!);
    }

    async enterLockedCredentials() {
        await this.page.fill(this.Elements.userNameInput, process.env.SAUCE_BLOCKED_USER!);
        await this.page.waitForTimeout(1000);
        await this.page.fill(this.Elements.passwordInput, process.env.SAUCE_PASSWORD!);
    }

    async submit() {
        await this.page.click(this.Elements.loginInput);
    }

    async validateLoginSuccess(textProduct: string) {
        await expect(this.page.locator(this.Elements.productLbl))
            .toBeVisible({ timeout: 6000 });
    }

    async validateLoginError() {
        await expect(this.page.locator(this.Elements.msgBlockedLbl))
            .toBeVisible({ timeout: 6000 });
    }
}