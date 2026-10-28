# Mini Portafolio Personal - React

Este proyecto es una Aplicación Web de Página Única (SPA) desarrollada en **React** con **Vite** y **React Router v6**, correspondiente a la **Evaluación N°3** de la asignatura Desarrollo Frontend en la carrera de Ingeniería Civil Informática del Instituto Tecnológico de la Universidad Católica de Temuco.

## 👤 Información del Estudiante

- **Nombre:** Mauricio Valdés Paredes
- **Carrera:** Ingeniería Civil Informática
- **Institución:** Instituto Tecnológico - Universidad Católica de Temuco
- **Docente:** Cristian Iglesias Vera

---

## 🚀 Características del Proyecto

- **Navegación SPA:** Implementada con `React Router v6` (`BrowserRouter`, `Routes`, `Route`, `Outlet`, `NavLink`, `Link`), con soporte para ruta 404 (`NotFound.jsx`).
- **Semántica HTML5 Pura:** Construcción estructurada utilizando etiquetas nativas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<fieldset>`, `<legend>`, `<label>`) con estricto cumplimiento de cero etiquetas neutras (`<div>`).
- **Accesibilidad WAI-ARIA:** Atributos de accesibilidad integrados (`role="img"`, `role="status"`, `role="alert"`, `aria-label`, `aria-labelledby`).
- **Componentes Reutilizables y Props:** Componente `TarjetaProyecto.jsx` para la renderización dinámica de proyectos desde un arreglo de datos.
- **Formulario Controlado:** Vista `Contacto.jsx` con manejo de estado (`useState`), validación de campos obligatorios y verificación de formato de correo electrónico.
- **Recursos Gráficos Contenidos:** Manejo de imágenes estáticas en `public/img/` (`perfil.jpg` y `presentacion.jpg`) con contención de dimensiones en CSS para evitar desbordamientos visuales.

---

## 🛠️ Tecnologías Utilizadas

- **Library/Framework:** React 18
- **Enrutamiento:** React Router DOM v6
- **Build Tool:** Vite
- **Lenguaje:** JavaScript (ES6+)
- **Estilos:** CSS3 nativo (CSS Grid y Flexbox)
- **Control de Versiones:** Git / GitHub

---

## 💻 Instrucciones para Ejecución Local

Para clonar y ejecutar este proyecto localmente desde **PowerShell** o **Git Bash**, sigue estos pasos:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/mvaldes2026Git/Evaluacion-React-Frontend.git](https://github.com/mvaldes2026Git/Evaluacion-React-Frontend.git)

### 2. Entrar a la carpeta del proyecto
```bash
cd Evaluacion-React-Frontend

### 3. Instalar las dependencias
```bash
npm install

### 4. Iniciar servidor de desarrollo
```bash
npm run dev

Una vez ejecutado, abre el navegador e ingresa a la dirección indicada por Vite que aparecerá en tu terminal.

Evaluacion-React-Frontend/
├── public/
│   ├── img/
│   │   ├── perfil.jpg
│   │   └── presentacion.jpg
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── TarjetaProyecto.jsx
│   ├── pages/
│   │   ├── Contacto.jsx
│   │   ├── Habilidades.jsx
│   │   ├── Inicio.jsx
│   │   ├── NotFound.jsx
│   │   ├── Proyectos.jsx
│   │   └── SobreMi.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── uso_ia.md
└── vite.config.js

