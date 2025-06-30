const contenedor = document.getElementById('catalogo hombres');

productos.forEach((producto, i) => {
    contenedor.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100">
                <img src="${producto.imagen}" class="img-producto card-img-top" alt="${producto.producto}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.producto}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text fw-bold">Precio: $${producto.precio.toFixed(2)}</p>
                    <a href="Detalles del Producto/Detalles del producto.html?id=${i}" class="btn btn-outline-primary">Ver detalles</a>
                    <a href="#" class="btn btn-primary mt-auto">Comprar Ahora</a>
                </div>
            </div>
        </div>
    `;
});