// detalle-hombre.js

// Obtener el parámetro de la URL (puede ser por índice o por nombre único)
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id')); // Si usas índice
// const nombre = params.get('nombre'); // Si usas nombre

// Buscar el producto (por índice o por nombre)
const producto = productos[id];
// const producto = productos.find(p => p.producto === nombre);

const root = document.getElementById('root');

// Renderizado dinámico
if (producto) {
  root.innerHTML = `
    <div class="row">
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <img src="${producto.imagen}" alt="${producto.producto}" class="producto-img shadow">
      </div>
      <div class="col-md-6">
        <h2>${producto.producto}</h2>
        <h4 class="text-success">$${producto.precioOferta.toFixed(2)} <small class="text-muted text-decoration-line-through">$${producto.precio.toFixed(2)}</small></h4>
        <p class="mb-3">${producto.descripcion}</p>
        <p><strong>Tallas disponibles:</strong> ${producto.tallas.join(', ')}</p>
        <button class="btn btn-primary btn-lg">Agregar al carrito</button>
      </div>
    </div>
  `;
} else {
  root.innerHTML = `<div class="alert alert-danger">Producto no encontrado.</div>`;
}
