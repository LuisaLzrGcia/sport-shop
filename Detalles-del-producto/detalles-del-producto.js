const producto = JSON.parse(localStorage.getItem("productoSeleccionado"));;


const root = document.getElementById('root');

if (producto) {
  const tieneOferta =
    producto.precioOferta !== undefined &&
    producto.precioOferta !== null &&
    producto.precioOferta > 0 &&
    producto.precioOferta < producto.precio;

  const tieneCategoria =
    producto.categoria !== "undefined" &&
    producto.categoria !== undefined &&
    producto.categoria !== null

  const tieneDescuento =
    producto.descuento !== "undefined" &&
    producto.descuento !== undefined &&
    producto.descuento !== null &&
    producto.descuento > 0;

  const precioFormateado = producto.precio.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN'
  });
  let precioOfertaFormateado = ''
  if (tieneOferta) {
    precioOfertaFormateado = producto.precioOferta.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN'
    });
  }

  root.innerHTML = `
    <div class="row card-item-details">
  <div class="col-md-6 d-flex align-items-center justify-content-center">
    <img src="${producto.imagen}" alt="${producto.producto}" class="producto-img shadow img-fluid">
  </div>
  <div class="col-md-6 card-details">
    <h2>${producto.producto}</h2>
       ${tieneCategoria
      ? `<span class="badge bg-dark mb-2">${producto.categoria}</span>`
      : ''
    }
    ${tieneOferta && tieneDescuento
      ? `<h4 class="text-success">${precioOfertaFormateado} <span class="text-decoration-line-through text-muted fs-6">${precioFormateado}</span></h4>
           <span class="badge bg-danger mb-2">${producto.descuento}% de descuento</span>`
      : `<h4 class="text-dark">${precioFormateado}</h4>`
    }

    <p class="mb-3">${producto.descripcion}</p>

    <p><strong>Tallas disponibles:</strong></p>
    <div class="d-flex flex-wrap mb-3">
      ${producto.tallas.map(talla =>
      `<span 
          class="btn bg-secondary m-1 talla-option text-white" 
          data-talla="${talla}" 
          onclick="seleccionarTalla(this)"
        >${talla}</span>`).join('')}
    </div>

    <button 
                onclick="addCart(this)", 
                class="btn fondo-negro-medio d-flex align-items-center gap-2 add-to-cart"
                data-producto="${producto.producto}"
                data-categoria="${producto.categoria}"
                data-descripcion="${producto.descripcion.replace(/"/g, '&quot;')}"
                data-tallas='${JSON.stringify(producto.tallas)}'
                data-imagen="${producto.imagen}"
                data-precio="${producto.precio}"
                data-preciooferta="${producto.precioOferta}"
                data-descuento="${producto.descuento}"
            >
                <span>Añadir al carrito</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                    <path
                        d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
                </svg>
            </button>
  </div>
</div>
  `;
} else {
  root.innerHTML = `<div class="alert alert-danger">Producto no encontrado.</div>`;
}
