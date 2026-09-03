# Bienestar Digital — Recurso Multimedia Educativo

Recurso multimedia educativo bilingüe (español / inglés) sobre bienestar digital,
dirigido a estudiantes universitarios. Corresponde a la Fase 2 del curso de
Aplicaciones Multimedia del programa de Ingeniería Multimedia de la UNAD.

## Tecnología

- HTML5, CSS3 y JavaScript (sin frameworks ni dependencias)
- Aplicación de una sola página con enrutamiento por hash (`#/`)
- Sin backend, sin base de datos, sin registro de usuarios
- Sin scripts, fuentes ni activos de terceros
- Preparado para publicación mediante GitHub Pages

## Contenido

- Página de inicio.
- 5 módulos temáticos, cada uno con 2 pantallas educativas (10 pantallas en total).
- Cada pantalla incluye introducción, contenido educativo, ejemplo práctico,
  una ilustración original, una actividad interactiva con retroalimentación y
  una nota de apoyo académico o institucional.
- Página de Créditos y referencias (fuentes académicas e institucionales,
  atribución de ilustraciones y de las herramientas utilizadas).
- Todo el texto de interfaz y de contenido existe en español y en inglés.

## Ejecutar en local

El proyecto usa módulos de JavaScript, por lo que debe abrirse a través de un
servidor HTTP (no con `file://`).

```
python3 -m http.server 8000
```

Luego abrir: <http://localhost:8000/#/>

## Publicar en GitHub Pages

1. Subir el repositorio a GitHub.
2. En *Settings → Pages*, seleccionar la rama principal y la carpeta raíz (`/`).
3. La aplicación quedará disponible en la URL pública que indique GitHub Pages.

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
assets/icons/         Favicon
```

## Alcance

Los 5 módulos, las 10 subsecciones, sus objetivos de aprendizaje, sus
interacciones y el soporte bilingüe fueron definidos en la Fase 1 y no se modifican.
