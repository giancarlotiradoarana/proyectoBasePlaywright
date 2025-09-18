import { expect } from "@playwright/test";
export default class LoginPage {

    private Elements ={
        userNameInput:"//*[@id='user-name']",
        passwordInput:"//*[@id='password']",
        loginInput:"//*[@id='login-button']",
        productLbl:"//span[contains(text(),'Products')]",
        msgBlockedLbl:"//h3[@data-test='error']",
    }

    async navigate(){
        await global.page.goto(process.env.BASEURL,{timeout:10000});  
    }
    
    async enterCredentials(){
        await global.page.fill(this.Elements.userNameInput, process.env.SAUCE_USERNAME);
        //Estoy utilizando un pequeño tiempo ADICIONAL para ver como se ingresa las credenciales
        await global.page.waitForTimeout(1000);
        await global.page.fill(this.Elements.passwordInput, process.env.SAUCE_PASSWORD);
    }

    async enterLockedCredentials(){
        await global.page.fill(this.Elements.userNameInput, process.env.SAUCE_BLOCKED_USER);
        //Estoy utilizando un pequeño tiempo ADICIONAL para ver como se ingresa las credenciales
        await global.page.waitForTimeout(1000);
        await global.page.fill(this.Elements.passwordInput, process.env.SAUCE_PASSWORD);
    }

    async submit(){
        await global.page.click(this.Elements.loginInput);
    }

    async validateLoginSuccess(textProduct:string){
        await expect(global.page.locator(this.Elements.productLbl,textProduct)).toBeVisible({timeout:6000});
         //Estoy utilizando un pequeño tiempo ADICIONAL para ver el texto "Products" en la otra página de Products
        await global.page.waitForTimeout(200);
    }

    async validateLoginError(){
        await expect(global.page.locator(this.Elements.msgBlockedLbl)).toBeVisible({timeout:6000});
         //Estoy utilizando un pequeño tiempo ADICIONAL para ver el mensaje de Error
        await global.page.waitForTimeout(1000);
    }
}