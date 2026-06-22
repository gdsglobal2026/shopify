# 🟠 HIPERPROMPT — Sección de Productos · GDS Animal

*Para Claude Code en la carpeta de tu tema. Ten en la carpeta: `web-referencia.jpeg`.*

> **Requisito:** ten activo el plugin **Shopify Dev MCP / AI Toolkit** en Claude Code. Si no lo está, ejecuta en el chat:
> `/plugin marketplace add Shopify/shopify-ai-toolkit`
> `/plugin install shopify-plugin@shopify-ai-toolkit`

*Pega la FASE 1, dejá que termine, revisá el HTML, y luego pegá la FASE 2.*

---

# 🟦 FASE 1 — CONSTRUIR EN HTML (lo que revisás primero)

## ⬇️ COPIA DE AQUÍ

**[1 · ROL]** Actuás como desarrollador frontend senior de ecommerce de alta conversión. Vas a construir la **sección de productos de GDS Animal en un único archivo HTML autocontenido** (HTML + CSS en `<style>` + JS vanilla). El objetivo es una sección de productos profesional, visualmente atractiva y orientada a la venta. Después lo pasaremos a Liquid, así que mantené el HTML **limpio y dividido por bloques bien comentados**.

**[2 · ESTILO]** Premium, limpio y orientado a conversión. Tarjetas de producto con sombra suave, bordes redondeados, imagen del producto grande, badge de categoría (Perros / Gatos), precio destacado, botón "AGREGAR AL CARRITO" con hover animado, y badge opcional de "NUEVO" o "MÁS VENDIDO". **Mobile-first y responsive.** Textos en **español rioplatense (Argentina)**, persuasivos y reales (nada de "lorem ipsum").

**[3 · REFERENCIAS]**
- **Consultá `web-referencia.jpeg` (en la carpeta).** Analizá cómo están diseñadas las cards de producto y replicá ese estilo fielmente. Ábrelo antes de empezar.
- Paleta de colores: azul marino `#0D1B4B`, azul cielo `#4A90D9`, blanco `#FFFFFF`, dorado `#F5C518`
- Tipografía: sans-serif moderna (Inter, Poppins o similar via Google Fonts)
- La tienda tiene únicamente **2 categorías: Perros 🐶 y Gatos 🐱**
- Habrá entre **3 y 5 productos** (usar placeholders hasta la carga real)

**[4 · TAREA Y REGLAS]** Creá un **único archivo `seccion-productos.html`** con exactamente esta estructura interna:

1 · Título de sección: "Productos Destacados" con subtítulo opcional
2 · Tabs de filtro: **Destacados** | **Nuevos** | **Más Vendidos** — funcionales con JS vanilla
3 · Grilla de 3 a 5 cards de producto, cada una con:
   - Imagen del producto (placeholder marcado con `<!-- REEMPLAZAR -->`)
   - Badge de categoría: "Perros" o "Gatos" (color diferenciado por categoría)
   - Badge secundario opcional: "Nuevo" o "Más Vendido"
   - Nombre del producto (texto real, no lorem ipsum)
   - Precio en pesos argentinos (ej: `$12.999`)
   - Precio tachado opcional (precio anterior)
   - Botón "AGREGAR AL CARRITO" con efecto hover
   - Ícono de favorito (corazón) en esquina superior

**[5 · RESTRICCIONES DURAS]**
- ❌ No usar ningún término en inglés en el contenido visible
- ❌ No usar lorem ipsum — inventá nombres y precios reales y convincentes
- ❌ No agregar productos de otras categorías además de Perros y Gatos
- ✅ Los tabs deben funcionar con JS vanilla puro (sin librerías)
- ✅ Comentar cada bloque con `<!-- BLOQUE: nombre -->` para facilitar conversión a Liquid
- ✅ Marcar cada imagen con `<!-- REEMPLAZAR: imagen producto X -->`
- ✅ Diseño responsive: 1 columna en mobile, 2 en tablet, 3 en desktop

**[6 · PENSÁ PASO A PASO]** Antes de escribir código verificá:
1. ¿Revisaste `web-referencia.jpeg` y analizaste el diseño de las cards de producto?
2. ¿Los tabs (Destacados / Nuevos / Más Vendidos) funcionan con JS vanilla?
3. ¿Cada card tiene badge de categoría Perros o Gatos?
4. ¿Los precios están en pesos argentinos y son convincentes?
5. ¿Todos los textos visibles están en español?
6. ¿La paleta `#0D1B4B / #4A90D9 / #F5C518 / #FFFFFF` está aplicada consistentemente?
7. ¿El diseño es responsive en mobile, tablet y desktop?

**[7 · OUTPUT]** Entregá únicamente el archivo `seccion-productos.html` completo y funcional. Al final del archivo, listá en comentarios todas las imágenes y datos a reemplazar con los productos reales.

---

# 🟩 FASE 2 — CONVERTIR A LIQUID (después de revisar el HTML)

## ⬇️ COPIA DE AQUÍ

**[1 · ROL]** Actuás como desarrollador Shopify senior. Vas a convertir el archivo `seccion-productos.html` aprobado en una sección Liquid nativa de Shopify, completamente editable desde el Theme Customizer.

**[2 · TAREA]** Convertí el HTML aprobado en estos archivos:

- `sections/productos-destacados.liquid` — sección completa con tabs y grilla de productos
- `snippets/card-producto.liquid` — snippet reutilizable para cada card de producto

**[3 · REGLAS LIQUID]**
- La sección debe tener su bloque `{% schema %}` con estos settings editables:
  - Título de la sección
  - Colección de productos a mostrar
  - Cantidad máxima de productos (entre 3 y 5)
  - Activar/desactivar badge "Nuevo" por producto
- Usá `{% for product in collections[section.settings.coleccion].products limit: section.settings.cantidad %}` para iterar productos reales
- El badge de categoría debe leerse del tag del producto: `{% if product.tags contains 'perros' %}Perros{% elsif product.tags contains 'gatos' %}Gatos{% endif %}`
- Los precios deben usar el filtro de Shopify: `{{ product.price | money }}`
- El botón "AGREGAR AL CARRITO" debe usar `{{ product.variants.first.id }}` en el form de Shopify
- Mantené los comentarios `<!-- BLOQUE: nombre -->` del HTML original
- Todos los textos por defecto en el schema deben estar en español

**[4 · RESTRICCIONES]**
- ❌ No romper el diseño visual aprobado en el HTML
- ❌ No mostrar productos de categorías distintas a Perros y Gatos
- ✅ Compatible con el Theme Customizer de Shopify
- ✅ Funcional con productos reales de Shopify (precio, imagen, título, variantes)
- ✅ Responsive mobile-first preservado del HTML original

**[5 · OUTPUT]** Entregá cada archivo Liquid por separado con su nombre indicado claramente. Al final, listá los pasos exactos para instalar los archivos en el tema de Shopify y cómo configurar los tags de productos en el admin.

---

*GDS Animal · Sección Productos · Español (Argentina) · Paleta: #0D1B4B | #4A90D9 | #F5C518 | #FFFFFF · Categorías: Perros 🐶 | Gatos 🐱 · 3 a 5 productos*
