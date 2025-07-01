document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('lista-productos');

    productos.forEach(producto => {
        const col = document.createElement('div');
        col.classList.add('col-md-6', 'col-lg-4');

        const productoJSON = JSON.stringify(producto).replace(/"/g, '&quot;'); 

        col.innerHTML = `
            <div class="card h-100">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.producto}">
                <div class="card-body">
                    <h5 class="card-title">${producto.producto}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text"><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
                    <button class="btn btn-success agregar-carrito" data-producto='${productoJSON}'>Agregar al carrito</button>
                </div>
            </div>
        `;

        container.appendChild(col);
    });

    container.addEventListener('click', function (e) {
        if (e.target.classList.contains('agregar-carrito')) {
            const producto = JSON.parse(e.target.getAttribute('data-producto'));

            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));

            alert(`"${producto.producto}" fue agregado al carrito.`);
        }
    });
});
