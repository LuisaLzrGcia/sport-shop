document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('carrito-productos');

    if (carrito.length === 0) {
        container.innerHTML = '<p class="text-center">No hay productos en el carrito.</p>';
        return;
    }

    carrito.forEach(producto => {
        const col = document.createElement('div');
        col.classList.add('col-md-6', 'col-lg-4');

        col.innerHTML = `
            <div class="card h-100">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.producto}">
                <div class="card-body">
                    <h5 class="card-title">${producto.producto}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text"><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
                    <button class="btn btn-danger eliminar-item">Eliminar</button>
                </div>
            </div>
        `;

        container.appendChild(col);
    });

    container.addEventListener('click', e => {
        if (e.target.classList.contains('eliminar-item')) {
            const index = Array.from(container.children).indexOf(e.target.closest('.col-md-6'));
            carrito.splice(index, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            location.reload();
        }
    });
});
