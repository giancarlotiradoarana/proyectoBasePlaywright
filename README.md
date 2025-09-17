  🧪 Reto Técnico QA Frontend – Automatización con Playwright + Cucumber

  ##  🎯 Objetivo del Reto Técnico

Automatizar los siguientes flujos como cliente de Sauce Demo:

- Inicio de sesión exitoso con credenciales válidas.
- Rechazo de inicio de sesión con credenciales inválidas.
- Agregar productos al carrito.
- Verificación de productos agregados.
- Finalizar la compra hasta la confirmación.
---

##  🚀 Tecnologías usadas

- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- [TypeScript](https://www.typescriptlang.org/)
- Page Object Model (POM)
- Git
- GitHub
---

## ⚙️ Pasos Previos:
Antes de comenzar con el reto técnico,  asegúrate de tener las siguientes herramientas y configuraciones instaladas en tu entorno de desarrollo:
1.	Node.js:
 Si aún no lo tienes, puedes descargarlo desde su página oficial:
https://nodejs.org/

    Recomendación: Instala la última versión estable de Node.js.


2.	Gestor de paquetes (npm): 
Incluye npm (Node Package Manager) de forma predeterminada, que se usará para instalar Playwright y otras dependencias.
Para verificar si npm está instalado, ejecuta en la terminal:

```bash  
   npm --version
 ```
3. Git:   Si aún no lo tienes, puedes descargarlo desde su página oficial:  
https://git-scm.com/

   Recomendación: Instala la versión más reciente compatible con tu sistema operativo.

---
Ya con esto es suficiente para poder clonar el proyecto.
## 📦 Clonar el Repositorio:

1. Crear una carpeta con un nombre referente al proyecto pero de preferencia en Documentos: C:\Users\User\Documents

2. Un vez creada la carpeta, hacer click derecho en esta opción:  Open Git Bash Here 

3. Ingresar estos comandos para clonar el repositorio.
```bash  
git init
 ```
 ```bash  
git clone https://github.com/giancarlotiradoarana/reto-tecnico-playwright-frontend.git
 ```
---

## 🖥️ Instalar Visual Studio Code:
 - Caso no tenga instalado este IDE de desarrollo, se puede descargar desde aqui: https://code.visualstudio.com/
 
## 📥 Instalar Playwright y Dependencias:

- Después de abrir el IDE, selecciona la carpeta donde se encuentra el proyecto clonado.

 Ahora abre una terminal se que encuentra en la parte superior izquierda en esta opción (View -> Terminal) y ingresar este comando.

```bash  
npm install playwright
 ```

Adicionalmente, para instalar las dependencias necesarias, los navegadores (Chromium, Firefox y WebKit), ejecuta el siguiente comando.

```bash  
npx playwright install
 ```
---

- IMPORTANTE: Se tiene que tener actualizado la version de chrome y de los demás navegadores
## 🔌 Extensión de Cucumber para Visual Studio Code:
Para facilitar la escritura de pruebas en Cucumber, se recomienda instalar la extensión Cucumber (Gherkin) Full Support en Visual Studio Code.

Proporciona resaltado de sintaxis, autocompletado y soporte para archivos .feature.

- Abre Visual Studio Code.

- Ve a la barra de extensiones.

- Busca e instala "Cucumber (Gherkin) Full Support".
---
## 📁 Estructura del Proyecto:
- El proyecto tiene la siguiente estructura, basada en el patrón de diseño POM (Page Object Model):

```bash
📁 src
└── 📁 features                    # Contiene los archivos de pruebas automatizadas por funcionalidades
    ├── 📄 compra.feature           # Escenario de prueba escritos en Gherkin para la funcionalidad de compra

    ├── 📁 helper                  # Funciones auxiliares y configuración del entorno
    │   ├── 📁 browsers            # (Opcional) Configuración de navegadores para ejecución de pruebas
    │   ├── 📁 env                 # Archivos de entorno para diferentes ambientes
    │   │   ├── 💲 .env.dev         # Variables de entorno para ambiente de desarrollo
    │   │   ├── 💲 .env.uat         # Variables de entorno para ambiente de pruebas UAT
    │   │   └── 📄 env.ts          # Lógica para cargar/gestionar variables de entorno
    │   ├── 📁 types               # Definiciones de tipos (TypeScript) si son necesarias
    │   └── 📄 report.ts           # Funciones relacionadas a la generación de reportes

    ├── 📁 hooks                   # Hooks globales o específicos para pruebas
    │   └── 📄 hooks.ts            # Código que se ejecuta antes/después de los escenarios

    ├── 📁 pages                   # Representación de páginas usando el patrón Page Object Model
    │   ├── 📄 CartPage.ts         # Página del carrito de compras
    │   ├── 📄 LoginPage.ts        # Página de inicio de sesión
    │   ├── 📄 ProductsPage.ts     # Página de productos
        └── 📄 CheckoutPage.ts     # Página de checkout
        
    ├── 📁 step-definitions                   # Definiciones de pasos para los escenarios Gherkin
    │   ├── 📄 carritoSteps.ts     # Pasos relacionados al carrito
    │   ├── 📄 checkoutSteps.ts    # Pasos relacionados al proceso de checkout
    │   └── 📄 loginSteps.ts       # Pasos relacionados al login

📁 test-results                   # Resultados de las ejecuciones de pruebas (reportes, logs, etc.)

📄 package-lock.json              # Archivo de bloqueo de dependencias generado por npm
📄 package.json                   # Archivo principal de configuración del proyecto (scripts, dependencias, etc.)
📄 README.md                      # Documentación principal del proyecto
📄 STRATEGY.md                    # Informe técnico sobre la estrategia de automatización, patrones aplicados y convenciones
📄 tsconfig.json                  # Configuración del compilador TypeScript

```
---

## 🧪 Ejecutar los casos prueba:

Para poder ejecutar los casos de pruebas, se tiene que abrir una terminal y ejecutar los Tags que comiencen con el signo @

A continuación se detallan algunos ejemplos de los comando con el Tag de caso en particular.

EJEMPLOS:

- npm run cucumber-test-uat --tags="@esc001_happy_path_login"
- npm run cucumber-test-uat --tags="@esc002_unhappy_path_login"
- npm run cucumber-test-uat --tags="@esc003_happy_path_agregar_producto"
- npm run cucumber-test-uat --tags="@esc004_happy_path_ver_carrito"
- npm run cucumber-test-uat --tags="@esc005_happy_path_completar_compra"

```bash  
npm run cucumber-test-uat --tags="Aqui se agrega el Tags correspondiente"
 ```
---

## 📊 REPORTE de los casos de  prueba:

Para ello se debe de ejecutar el siguente comando:

IMPORTANTE: Luego de terminar de ejecutar el caso de prueba se ejecuta el comando.
```bash  
npm run cucumber-report
 ```
---


## Informe sobre la estrategia de automatización y patrones utilizados.

El informe se encuentra en el proyecto, en la siguente Ruta:
```bash
📁 src             
 ├── 📄 STRATEGY.md  
  ```
  ---
- Se colocó en un archivo separado para evitar sobrecargar el README.md y seguir buenas prácticas de organización y mantenimiento de documentación técnica.

Para ver la estrategia de automatización y patrones utilizados, consulta el archivo: ==>  [STRATEGY.md](./STRATEGY.md)

---
