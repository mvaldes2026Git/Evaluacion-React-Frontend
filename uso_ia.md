---

```markdown
# Registro de Uso de Inteligencia Artificial

## 1. IA usada
- Gemini (Google AI)

## 2. Modelo
- Gemini 3.6 Thinking

## 3. Prompts
1. **Definición de estructura (Fase 4):**
   > "Hola, Gemini. Quiero que definamos la estructura del portafolio, aquí te voy dando los pasos en las imágenes. Y te voy a dar el link del repositorio para que lo analices. https://github.com/mvaldes2026Git/Evaluacion-React-Frontend.git"

2. **Revisión de rúbrica y actualización de documentación:**
   > "Aquí está la rúbrica, y debo actualizar el uso_ia.md. ¿Cómo lo hago y qué debo hacer ahora antes de hacer push para pasar al paso 5?"

3. **Personalización del Footer:**
   > "Funciona, pero cambiemos algo. En vez de que diga 'mi nombre' que diga, 'Mauricio Valdés Paredes'."

4. **Actualización de registro de IA:**
   > "Actualicemos de nuevo el uso_ia.md. Y recuerda que hay que poner los prompts que usé acá."

5. **Inicio de Fase 5:**
   > "Ahora, pasemos al paso 5, RECUERDA QUE HAY QUE SEGUIR LA RÚBRICA Y CUANDO TERMINEMOS EL PASO 5, ACTUALIZAR uso_ia.md"

6. **Ajuste de diseño simple y actualización de documentación:**
   > "Ah, y tiene que ser de este diseño. Retrocedamos al mismo resultado del prompt anterior a este (inserción al paso 5, y modificar cosas del paso 4), pero modificado siguiendo este diseño. No olvides nunca actualizar el uso_ia.md"

7. **Alineación 1:1 con Wireframe Oficial:**
   > "Me equivoqué, este es el diseño. Todo de nuevo por favor."

8. **Refactorización Semántica Estricta y WAI-ARIA (Cero "sopas de divs"):**
   > "¿Eso que mandaste no son sopas de divs? ¿Por qué veo muchos divs? ¿Es sopa? Recordemos que debes usar la menor cantidad de divs posibles, y usar mayormente el lenguaje semántico y WAI-ARIA..."

9. **Eliminación de divs en NotFound, cierre de Paso 5 y actualización de documentación:**
   > "Cambiemos el NotFound.jsx, para que no tenga divs. Terminemos el Paso 5 y actualicemos el uso_ia.md y el README.md"

10. **Ajuste unificado de README.md:**
    > "Rehaz el README.md y el uso_ia.md (ya que estoy mandando nuevo prompt) para añadir en el README.md los pasos para instalar dependencias y correr en local con comandos de Powershell o Git Bash..."

11. **Fase 6 - Componente TarjetaProyecto:**
    > "FASE 6 POR FAVOR, NO TE EQUIVOQUES. NO OLVIDES ACTUALIZAR EL uso_ia.md NUNCA."

12. **Inclusión de maquetación CSS:**
    > "Falta el diseño, tiene que quedar igual que este."

13. **Integración de imágenes .jpg y proyectos específicos:**
    > "Arregla eso. Y en acorde a estos 2 códigos: Proyectos.jsx ... Habilidades.jsx ... EN ESPAÑOL POR FAVOR. La presentación es presentación.jpg y el perfil es perfil.jpg"

14. **Ajuste de encuadre de imagen en Inicio.jsx y maquetación de Contacto.jsx:**
    > "Arregla eso del presentacion.jpg, y toquemos Contacto.jsx para que quede así, y en TuNombre obvio va 'Mauricio Valdés Paredes'. TODO DEBE QUEDAR COMO EN LA TERCERA IMAGEN."

15. **Verificación de árbol de archivos y cierre definitivo:**
    > "La estructura es así. Ahora sí, culminemos todo." *(Adjunta capturas exactas del explorador de archivos de VS Code)*

## 4. Outputs
- Configuración completa de la SPA con React Router v6 y maquetación semántica en cinco vistas principales (`Inicio`, `SobreMi`, `Habilidades`, `Proyectos`, `Contacto`) y manejo de ruta desconocida (`NotFound`).
- Implementación del componente reutilizable `TarjetaProyecto.jsx` recibiendo datos vía `props` e integrando enlaces seguros con `target="_blank"` y `rel="noopener noreferrer"`.
- Creación de la vista `Contacto.jsx` con formulario controlado mediante `useState`, validación Regex para correos y feedback mediante atributos accesibles WAI-ARIA.
- Maquetación CSS en `index.css` alineada al wireframe oficial del curso, con límites explícitos para imágenes (`object-fit: cover`) en `public/img/` (`perfil.jpg` y `presentacion.jpg`).
- Documentación técnica final (`README.md` y `uso_ia.md`) reflejando fielmente la estructura real del proyecto en VS Code.

## 5. Ajustes concretos
- Se eliminó totalmente el uso de la etiqueta `<div>` en la aplicación, reemplazándola por marcado HTML5 semántico puro (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<fieldset>`, `<legend>`, `<label>`).
- Se ajustaron las dimensiones de `presentacion.jpg` en la sección Hero de `Inicio.jsx` (`height: 260px`, `object-fit: cover`) para evitar desbordamientos en pantalla.
- Se configuró el formulario en `Contacto.jsx` con contenedor de fondo gris y campos estilizados conforme a la quinta vista del wireframe oficial.
- Se registró la estructura exacta del repositorio en el archivo `README.md`, incluyendo los archivos estáticos de la carpeta `public/` (`favicon.svg`, `icons.svg`, `img/perfil.jpg`, `img/presentacion.jpg`).

## 6. Reflexión crítica propia
**Declaración de nivel de comprensión:** Mi nivel de comprensión sobre las tecnologías implementadas (React, React Router v6, JSX y HTML5 Semántico) es **Intermedio**.

Entiendo la lógica del desarrollo de una SPA en React, la separación de responsabilidades en componentes, el flujo de datos unidireccional con `props`, la gestión de estado con `useState` y la maquetación accesible con HTML5 y WAI-ARIA. La interacción constante con la Inteligencia Artificial me sirvió como herramienta de apoyo para agilizar el diseño CSS, asegurar la semántica libre de etiquetas neutras y estructurar la documentación técnica exigida por la institución.