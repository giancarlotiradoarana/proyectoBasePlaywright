## 🧾 Informe breve sobre la estrategia de automatización y patrones utilizados.
El proyecto de automatización fue desarrollado utilizando Playwright junto con Cucumber, permitiendo la escritura de pruebas en lenguaje Gherkin para lograr una mayor legibilidad y colaboración con perfiles no técnicos.

Se diseñó una suite de pruebas automatizadas para validar los flujos más importantes de la aplicación Sauce Demo, incluyendo:

- Inicio de sesión exitoso con credenciales válidas

- Inicio de sesión fallido con usuario bloqueado

- Agregado de productos al carrito

- Verificación del contenido del carrito

- Finalización del proceso de compra (checkout)

Para lograr una arquitectura mantenible y escalable, se aplicó el patrón de diseño Page Object Model (POM). Este patrón facilita la reutilización del código y desacopla la lógica de los tests de los detalles técnicos de la interfaz de usuario.

Cada página de la aplicación fue representada como una clase con sus respectivos métodos de interacción, lo cual mejora la legibilidad y el mantenimiento de las pruebas automatizadas.

Además, se incluyeron:

- Variables de entorno para facilitar pruebas en distintos entornos

- Hooks para manejar pasos comunes antes y después de cada escenario

- Generación automática de reportes de prueba

- Separación clara entre definiciones de pasos (steps), archivos de funcionalidades (features) y lógica de página (pages)

Esta estrategia garantiza una base sólida para la automatización de pruebas funcionales y permite una fácil extensión en futuros escenarios o regresiones
