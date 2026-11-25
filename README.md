# Bienestar Digital — Recurso Multimedia Educativo

Recurso multimedia educativo bilingüe (español / inglés) sobre bienestar digital,
dirigido a estudiantes universitarios. Corresponde a la Fase 2 del curso de
Aplicaciones Multimedia del programa de Ingeniería Multimedia de la UNAD.

**Aplicación publicada:** <https://ashkenaz-create.github.io/digital-wellbeing-multimedia/#/>

## Tecnología

- HTML5, CSS3 y JavaScript (sin frameworks ni dependencias)
- Aplicación de una sola página con enrutamiento por hash (`#/`)
- Sin backend, sin base de datos, sin registro de usuarios
- Sin scripts, fuentes ni activos de terceros
- Publicado mediante GitHub Pages

## Contenido

- Página de inicio.
- 5 módulos temáticos, cada uno con 2 pantallas educativas (10 pantallas en total).
- Cada pantalla incluye introducción, contenido educativo, ejemplo práctico,
  una ilustración original, una actividad interactiva con retroalimentación y
  una nota de apoyo académico o institucional.
- Una animación original de 60 segundos en la pantalla 2B (ver «Recurso
  audiovisual»).
- Página de Créditos y referencias (fuentes académicas e institucionales,
  atribución de ilustraciones, del recurso audiovisual y de las herramientas
  utilizadas).
- Todo el texto de interfaz y de contenido existe en español y en inglés.

## Recurso audiovisual (AJ-01)

La pantalla 2B incluye la animación «Una notificación, una distracción»,
ubicada después de la ilustración y antes de la actividad interactiva.

- Archivos en `assets/video/`: `una-notificacion-una-distraccion.mp4`
  (1920 × 1080, 30 fps, 60 s, H.264, sin audio, 3,1 MB), su póster
  (`...-poster.jpg`) y los subtítulos `.es.vtt` y `.en.vtt`.
- El vídeo no tiene voz ni texto incrustado. Los subtítulos se activan
  inicialmente en el idioma seleccionado y el usuario puede desactivarlos con los
  controles del reproductor; esa preferencia se recuerda en el navegador.
- No se reproduce automáticamente. Al cambiar de idioma en la pantalla 2B se
  conservan el instante de reproducción y la alternativa textual abierta.
- La alternativa textual (resumen y transcripción descriptiva por escena) está en
  `js/content.js`, en español e inglés, y se muestra bajo el vídeo.
- Se produjo con Remotion y FFmpeg, herramientas de producción que no forman parte
  de la aplicación: el repositorio solo contiene el vídeo resultante, su póster y
  los subtítulos. La aplicación sigue usando únicamente HTML5, CSS3 y JavaScript.

## Ejecutar en local

El proyecto usa módulos de JavaScript, por lo que debe abrirse a través de un
servidor HTTP (no con `file://`). El servidor sencillo de Python no admite
solicitudes por rangos, por lo que desplazarse dentro del vídeo puede ser limitado
en local. La reproducción en GitHub Pages se comprobará en la versión pública.

```
python3 -m http.server 8000
```

Luego abrir: <http://localhost:8000/#/>

## Publicar en GitHub Pages

1. Subir el repositorio a GitHub.
2. En *Settings → Pages*, seleccionar la rama principal y la carpeta raíz (`/`).
3. La aplicación queda disponible en:
   <https://ashkenaz-create.github.io/digital-wellbeing-multimedia/#/>

El enrutamiento por hash permite recargar cualquier vista sin errores 404.

## Estructura del proyecto

```
index.html            Shell de la aplicación (cabecera, navegación, pie)
css/styles.css        Sistema visual completo
js/app.js             Arranque y eventos de interfaz
js/router.js          Enrutamiento por hash y vistas
js/language.js        Cambio de idioma ES / EN y persistencia
js/content.js         Todos los textos de interfaz y de contenido (ES / EN)
js/interactions.js    Actividades interactivas y almacenamiento local
assets/illustrations/ Ilustraciones SVG originales
assets/video/         Animación de la pantalla 2B: MP4, póster y subtítulos VTT
assets/icons/         Favicon
```

## Alcance

Los 5 módulos, las 10 subsecciones, sus objetivos de aprendizaje, sus
interacciones y el soporte bilingüe fueron definidos en la Fase 1 y no se modifican.
