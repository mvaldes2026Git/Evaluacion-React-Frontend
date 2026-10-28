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
    > "Rehaz el README.md y el uso_ia.md (ya que estoy mandando nuevo prompt) para añadir en el README.md los pasos para instalar dependencias y correr en local con comandos de Powershell o Git Bash, todo mantenlo igual en README.md, solo agrega eso, ya que te salió en separado porque es comando, y claro, actualiza uso_ia.md como te dije. Y ahora sí, concluimos al paso 5."

11. **Fase 6 - Componente TarjetaProyecto:**
    > "FASE 6 POR FAVOR, NO TE EQUIVOQUES. NO OLVIDES ACTUALIZAR EL uso_ia.md NUNCA."

12. **Refactorización minimalista de TarjetaProyecto en Fase 6:**
    > "No uses esas tarjetas grandotas que mandas, porque malogras el código, de nuevo por favor."

## 4. Outputs
- Creación del componente reutilizable `TarjetaProyecto.jsx` recibiendo `titulo`, `descripcion` y `enlace` mediante desestructuración de `props`.
- Enlaces externos a repositorios configurados de manera segura mediante la etiqueta `<a>` con `target="_blank"` y `rel="noopener noreferrer"`.
- Implementación de la vista `Proyectos.jsx` iterando con `.map()` un arreglo de objetos de proyectos reales y pasando las `props` al componente hijo `TarjetaProyecto`.
- Mantenimiento estricto del estándar HTML5 semántico puro (cero etiquetas `<div>`) y atributos de accesibilidad WAI-ARIA (`role="img"`, `aria-label`).
- Actualización completa y ordenada del registro de auditoría `uso_ia.md`.

## 5. Ajustes concretos
- Se simplificó la estructura de `TarjetaProyecto.jsx` empleando únicamente las etiquetas semánticas `<article>`, `<figure>`, `<figcaption>`, `<header>`, `<p>` y `<a>`, eliminando wrappers neutros innecesarios.
- Se implementó renderizado condicional en `TarjetaProyecto.jsx` para mostrar un texto informativo cuando un proyecto carece de repositorio público.
- En `Proyectos.jsx`, las tarjetas se agruparon dentro de una lista semántica `<ul>` e ítems `<li>` con sus claves únicas (`key`).
- Se verificó que el cambio de datos en el arreglo de objetos modifique automáticamente el contenido renderizado en la interfaz.

## 6. Reflexión crítica propia
Diseñar componentes reutilizables en React requiere mantener un marcado ligero y directo. Evitar contenedores innecesarios no solo previene problemas de maquetación en CSS, sino que preserva la accesibilidad nativa del navegador. La abstracción de `TarjetaProyecto` permite escalar la vista de proyectos fácilmente modificando únicamente la fuente de datos, demostrando la potencia del flujo unidireccional de datos mediante `props`.