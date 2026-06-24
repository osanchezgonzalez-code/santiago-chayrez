# Santiago Chayrez — sitio personal

Página de una sola pantalla para un golfista, hecha con HTML, CSS y JavaScript puro. Sin frameworks ni build: es un solo archivo `index.html` que se sube tal cual.

Incluye luz de la mañana que sigue el cursor, la trayectoria de un drive que se dibuja al cargar, una tarjeta de score real (con birdies, águila y hoyo en uno), marquesina animada, botones magnéticos y reveals al hacer scroll. Todo se desactiva solo si el sistema tiene activado "reducir movimiento".

## Verla en local

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python3 -m http.server 8000
```

Luego entra a `http://localhost:8000`.

## Qué editar

Todo vive dentro de `index.html`:

- **Textos** (rol, descripción, ficha, trayectoria, contacto): busca lo que dice "edítalo" o "invéntate".
- **La tarjeta de score**: en la sección `02 — La tarjeta`. Cambia los números de las filas `Par` y `Santiago`. Las marcas se ponen con clases en cada `<span>`:
  - `mk-birdie` → círculo verde (un bajo par)
  - `mk-eagle` → doble círculo dorado (dos bajo par)
  - `mk-bogey` → cuadro naranja (un sobre par)
  - `mk-ace` → relleno naranja (hoyo en uno)
  - sin clase (`mk` solo) → par
- **Colores y tipografías**: al inicio del archivo, en el bloque `:root` del `<style>`.

## Publicar en GitHub Pages

El repo incluye un workflow en `.github/workflows/deploy.yml` que despliega solo en cada push a `main`.

En Settings → Pages → Source, elige **GitHub Actions**. En unos minutos queda en `https://TU-USUARIO.github.io/TU-REPO/`.
