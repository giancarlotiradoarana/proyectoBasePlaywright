import { Page, expect } from "@playwright/test";
export default class ProductsPage {
   constructor(private page:Page){}
    private Elements ={
        addProductBtn:"//div[.='{addProduct}']/ancestor::div[contains(@class,'inventory_item')]//button",
        numberProductsCartLbl:"//*[@id='shopping_cart_container']/a/span",
        cartIconBtn:"//*[@id='shopping_cart_container']/a",
        youCartLbl:"//div[contains(text(),'Your Cart')]",
    }

   async addProductToCart(product: string){
      const productsCart = await this.page.locator(this.Elements.addProductBtn.replace("{addProduct}",product)).textContent();
      if(productsCart?.trim() === "Remove"){
         await this.page.click(this.Elements.addProductBtn.replace("{addProduct}",product));
      }
        await this.page.click(this.Elements.addProductBtn.replace("{addProduct}",product));
   }

   async validateCartCount(count: string){
       await expect(this.page.locator(this.Elements.numberProductsCartLbl)).toHaveText(count);
       //Si desea obtener el valor del total del producto del carrito, se puede utilizar el metodo textContent()
       const countProduct = await this.page.locator(this.Elements.numberProductsCartLbl).textContent();
       //Adicional un pequeño tiempo de espera ADICIONAL para validar que el producto se haya agregado al carrito
       await this.page.waitForTimeout(5000);
   }

   async goToCart(){
       await this.page.click(this.Elements.cartIconBtn);
       await expect(this.page.locator(this.Elements.youCartLbl)).toBeHidden({timeout:6000});
       //Se agrega un pequeño tiempo ADICIONAL de espera para validar la lista de los productos en el carrito
       await this.page.waitForTimeout(500);
   }
}
