# Bienestar Digital — Recurso Multimedia Educativo

Recurso multimedia educativo bilingüe (español / inglés) sobre bienestar digital,
dirigido a estudiantes universitarios. Corresponde a la Fase 2 del curso de
Aplicaciones Multimedia del programa de Ingeniería Multimedia de la UNAD.

## Tecnología

- HTML5, CSS3 y JavaScript (sin frameworks ni dependencias)
- Aplicación de una sola página con enrutamiento por hash (`#/`)
- Sin backend, sin base de datos, sin registro de usuarios
- Publicación prevista mediante GitHub Pages

## Ejecutar en local

El proyecto usa módulos de JavaScript, por lo que debe abrirse a través de un
servidor HTTP (no con `file://`).

```
python3 -m http.server 8000
```

Luego abrir: <http://localhost:8000/#/>

## Publicación en GitHub Pages

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
js/content.js         Todos los textos de interfaz (ES / EN)
js/interactions.js    Almacenamiento y registro de actividades interactivas
assets/               Imágenes, ilustraciones e iconos
```

## Estado actual

Versión estructural (Etapas 1–3): shell, sistema visual, navegación,
cambio de idioma, enrutamiento, vista de inicio, estructura de Créditos y
andamiaje de las 10 pantallas educativas.

Las 10 pantallas educativas muestran un andamiaje temporal con la etiqueta
*"El contenido del módulo se integrará en la siguiente etapa de desarrollo."*
Este contenido temporal se reemplazará durante el desarrollo de cada módulo.

## Alcance

Los 5 módulos, las 10 subsecciones, sus objetivos de aprendizaje, sus
interacciones y el soporte bilingüe fueron definidos en la Fase 1 y no se modifican.
