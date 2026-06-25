document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-variant-id]");
  if (!btn || btn.disabled) return;
  e.preventDefault();

  const variantId = btn.dataset.variantId;
  const originalText = btn.textContent.trim();

  btn.textContent = "Agregando...";
  btn.disabled = true;

  try {
    const res = await fetch("/cart/add.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: Number(variantId), quantity: 1 }),
    });

    if (res.ok) {
      btn.textContent = "✓ Agregado";

      const cart = await fetch("/cart.js").then((r) => r.json());

      document
        .querySelectorAll("[data-cart-count], .cart-count, #cart-count")
        .forEach((el) => (el.textContent = cart.item_count));

      if (window.ttq) {
        ttq.track("AddToCart", {
          content_id: variantId,
          content_name: btn.dataset.productHandle,
          currency: Shopify.currency.active,
          value: parseFloat(btn.dataset.price) / 100
        });
      }

      document.dispatchEvent(new CustomEvent("cart:open"));
    } else {
      btn.textContent = "Error — intentá de nuevo";
    }
  } catch {
    btn.textContent = "Sin conexión";
  }

  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
  }, 2000);
});
