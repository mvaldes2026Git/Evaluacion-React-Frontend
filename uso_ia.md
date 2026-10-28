# Registro de Uso de Inteligencia Artificial

## 1. IA usada
- Gemini (Google AI)

## 2. Modelo
- Gemini 3.6 Thinking

## 3. Prompts
1. **Definición de estructura (Fase 4):**
   > "Hola, Gemini. Quiero que definamos la estructura del portafolio, aquí te voy dando los pasos en las imágenes. Y te voy a dar el link del repositorio para que lo analices. https://github.com/mvaldes2026Git/Evaluacion-React-Frontend.git" *(Junto con la imagen de la Fase 4)*

2. **Revisión de rúbrica y actualización de documentación:**
   > "Aquí está la rúbrica, y debo actualizar el uso_ia.md. ¿Cómo lo hago y qué debo hacer ahora antes de hacer push para pasar al paso 5?" *(Junto con el PDF de la rúbrica)*

3. **Personalización del Footer:**
   > "Funciona, pero cambiemos algo. En vez de que diga 'mi nombre' que diga, 'Mauricio Valdés Paredes'." *(Junto con la captura de pantalla del resultado)*

4. **Actualización de registro de IA:**
   > "Actualicemos de nuevo el uso_ia.md. Y recuerda que hay que poner los prompts que usé acá."

## 4. Outputs
- Estructura inicial del enrutamiento en React (`main.jsx`, `App.jsx`, `Layout.jsx`, `Header.jsx`, `Footer.jsx` y las 5 páginas iniciales).
- Inclusión del componente `NotFound.jsx` para el manejo de rutas 404 exigidas por la rúbrica.
- Plantilla estandarizada con las 6 secciones requeridas para `uso_ia.md`.
- Actualización del componente `Footer.jsx` con el nombre real en lugar del placeholder genérico.

## 5. Ajustes concretos
- Se modificó el `Footer.jsx` para reemplazar la etiqueta estática `"Tu Nombre"` por `"Mauricio Valdés Paredes"`.
- Se configuró la propiedad `end` exclusivamente en la ruta raíz (`/`) dentro de `NavLink` para evitar que quede marcada permanentemente como activa.
- Se agregó la ruta comodín (`path="*"`) conectada a `NotFound.jsx` para el manejo de páginas no encontradas (404).
- Se añadieron reglas de CSS para dar retroalimentación visual al enlace activo mediante la clase `.active`.

## 6. Reflexión crítica propia
El uso de la IA aceleró considerablemente el flujo de trabajo al generar la estructura base de componentes y rutas en React Router v6. No obstante, fue imprescindible contrastar los resultados de la IA contra los requerimientos de la rúbrica para identificar detalles que no venían explícitos en las instrucciones iniciales, como el manejo de errores 404, la indicación de sección activa y la personalización del nombre en el footer. Esto demuestra que la IA es una herramienta eficiente de apoyo, pero la revisión y criterio técnico del desarrollador siguen siendo el filtro determinante para garantizar un resultado de calidad.