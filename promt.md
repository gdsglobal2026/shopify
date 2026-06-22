# 🟠 HIPERPROMPT — Clonar tienda (referencia) · GDS Animal

*Para Claude Code en la carpeta de tu tema. Ten en la carpeta: `web-referencia.jpeg`.*

> **Requisito:** ten activo el plugin **Shopify Dev MCP / AI Toolkit** en Claude Code. Si no lo está, ejecuta en el chat:
> `/plugin marketplace add Shopify/shopify-ai-toolkit`
> `/plugin install shopify-plugin@shopify-ai-toolkit`

*Pega la FASE 1, dejá que termine, revisá el HTML, y luego pegá la FASE 2.*

---

# 🟦 FASE 1 — CONSTRUIR EN HTML (lo que revisás primero)

## ⬇️ COPIA DE AQUÍ

**[1 · ROL]** Actuás como desarrollador frontend senior de ecommerce de alta conversión. Vas a construir la **página de inicio de GDS Animal en un único archivo HTML autocontenido** (HTML + CSS en `<style>` + JS vanilla), réplica fiel del diseño de referencia. Después lo pasaremos a Liquid, así que mantené el HTML **limpio y dividido por secciones bien comentadas**.

**[2 · ESTILO]** Premium, limpio, espacioso y orientado a venta. Mucho blanco, tarjetas redondeadas, sombras sutiles, botones con hover, íconos circulares de categoría. **Mobile-first y responsive.** Textos en **español rioplatense (Argentina)**, persuasivos y reales (nada de "lorem ipsum").

**[3 · REFERENCIAS]**
- **Consultá `web-referencia.jpeg` (en la carpeta).** Es tu objetivo visual: replicá cada sección tal como aparece. Ábrelo y analizalo antes de empezar.
- Paleta de colores: azul marino `#0D1B4B`, azul cielo `#4A90D9`, blanco `#FFFFFF`, dorado `#F5C518`
- Tipografía: sans-serif moderna (Inter, Poppins o similar via Google Fonts)

**[4 · TAREA Y REGLAS]** Creá un **único archivo `pagina-inicio.html`** que replique exactamente el diseño de referencia, sin saltarte ninguna sección:

1 · cabecera (logo + búsqueda + íconos cuenta/favoritos/carrito + menú)
2 · hero (imagen perro+gato + titular + botón "COMPRÁ AHORA")
3 · sección "COMPRÁ POR CATEGORÍA" con exactamente **2 íconos circulares: Perros 🐶 y Gatos 🐱** — ninguna otra categoría
4 · sección "PRODUCTOS DESTACADOS" con tabs (Destacados / Nuevos / Más Vendidos) y grilla de 3 a 5 productos placeholder
5 · footer (links + redes sociales + newsletter)

**[5 · RESTRICCIONES DURAS]**
- ❌ No agregar ninguna otra categoría de animal además de Perros y Gatos
- ❌ No usar ningún término en inglés en el contenido visible del sitio
- ❌ No usar lorem ipsum — inventá textos reales en español
- ✅ Comentar cada sección con `<!-- SECCIÓN: nombre -->` para facilitar conversión a Liquid
- ✅ Marcar cada imagen placeholder con `<!-- REEMPLAZAR: descripción -->`
- ✅ Un solo archivo HTML autocontenido, sin dependencias externas salvo Google Fonts

**[6 · PENSÁ PASO A PASO]** Antes de escribir código:
1. ¿Revisaste `web-referencia.jpeg` y entendiste el layout completo?
2. ¿La sección de categorías tiene exactamente 2: Perros y Gatos?
3. ¿Todos los textos visibles están en español?
4. ¿La paleta `#0D1B4B / #4A90D9 / #F5C518 / #FFFFFF` está aplicada consistentemente?
5. ¿El diseño es responsive en mobile y desktop?

**[7 · OUTPUT]** Entregá únicamente el archivo `pagina-inicio.html` completo y funcional. Al final del archivo, agregá un comentario con la lista de imágenes a reemplazar.

---

# 🟩 FASE 2 — CONVERTIR A LIQUID (después de revisar el HTML)

## ⬇️ COPIA DE AQUÍ

**[1 · ROL]** Actuás como desarrollador Shopify senior. Vas a convertir el archivo `pagina-inicio.html` que acabás de construir en secciones Liquid nativas de Shopify, editables desde el Theme Customizer.

**[2 · TAREA]** Tomá el HTML aprobado y convertilo en estos archivos separados:

- `templates/index.json` — template de la página de inicio
- `sections/hero-banner.liquid` — sección del hero con imagen, titular y botón
- `sections/categorias.liquid` — sección con los 2 íconos de categoría (Perros y Gatos)
- `sections/productos-destacados.liquid` — grilla de productos con tabs
- `sections/footer.liquid` — pie de página completo

**[3 · REGLAS LIQUID]**
- Cada sección debe tener su bloque `{% schema %}` con settings editables desde el customizer
- Usá `{{ section.settings.titulo }}` para todos los textos editables
- Usá `{% for product in collections[section.settings.coleccion].products %}` para los productos
- Mantené los comentarios `<!-- SECCIÓN: nombre -->` del HTML original
- Marcá los assets faltantes con `<!-- REEMPLAZAR -->`
- Todos los textos por defecto en los schemas deben estar en español

**[4 · RESTRICCIONES]**
- ❌ No romper la estructura visual aprobada en el HTML
- ❌ No agregar categorías nuevas — solo Perros y Gatos
- ✅ Compatible con el Theme Customizer de Shopify
- ✅ Responsive mobile-first preservado del HTML original

**[5 · OUTPUT]** Entregá cada archivo Liquid por separado, con su nombre de archivo indicado claramente. Al final, listá los pasos para instalar los archivos en el tema de Shopify.

---

*GDS Animal · Español (Argentina) · Paleta: #0D1B4B | #4A90D9 | #F5C518 | #FFFFFF · Categorías: Perros 🐶 | Gatos 🐱*
