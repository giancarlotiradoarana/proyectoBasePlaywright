import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import  LoginPage  from "../pages/LoginPage";

const loginPage = new LoginPage();

Given('el usuario está en la página de inicio de sesion', async function () {
  await loginPage.navigate();
});

 When('el usuario ingresa credenciales válidas', async function () {
   await loginPage.enterCredentials();
   
 });

  When('el usuario bloqueado intenta iniciar sesión', async function () {
   await loginPage.enterLockedCredentials();
   
 });

 When('hace clic en el botón de login', async function () {
   await loginPage.submit();

 });

 Then('el usuario debería ver el texto {string} en la parte superior', async function (textProduct:string) {
   await loginPage.validateLoginSuccess(textProduct);

 });

 Then('debería ver un mensaje de error indicando que el usuario está bloqueado', async function () {
   await loginPage.validateLoginError();
   
 });
 
