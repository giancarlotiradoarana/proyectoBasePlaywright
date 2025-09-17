@Compra_Sauce_Demo @R1
Feature: Compra de productos en Sauce Demo  
  Como un cliente de Sauce Demo,
  Quiero poder iniciar sesión, agregar productos al carrito y completar una compra,
  Para poder adquirir los productos que necesito

  Background: Navegar al sitio de Sauce Demo
    Given el usuario está en la página de inicio de sesion
    
  @esc001_happy_path_login @R1
  Scenario: Inicio de sesión exitoso con credenciales válidas
   When el usuario ingresa credenciales válidas
   And hace clic en el botón de login
   Then el usuario debería ver el texto "Products" en la parte superior

 