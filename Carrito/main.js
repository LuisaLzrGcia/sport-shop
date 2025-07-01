document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('carrito-productos');
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []
    console.log(carrito);

    if (carrito.length === 0) {
        container.innerHTML = '<p class="text-center">No hay productos en el carrito.</p>';
        return;
    }

    let total = 0;

    carrito.forEach((producto, index) => {
        const col = document.createElement('div');
        col.classList.add('col-md-6', 'col-lg-3');

        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        col.innerHTML = `
            <div class="card h-100">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.producto}">
                <div class="card-body">
                    <h5 class="card-title">${producto.producto}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text"><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
                    <p class="card-text"><strong>Cantidad:</strong> ${producto.cantidad}</p>
                    <p class="card-text"><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
                    <button class="btn btn-danger eliminar-item" data-index="${index}">Eliminar</button>
                </div>
            </div>
        `;

        container.appendChild(col);
    });

    // Mostrar total y botón de finalizar compra
    const resumen = document.createElement('div');
    resumen.innerHTML = `
        <div class="text-center mt-5">
            <h4>Total a pagar: $${total.toFixed(2)}</h4>
            <button class="btn btn-success btn-lg mt-3" id="finalizar-compra">Finalizar compra</button>
        </div>
    `;
    container.parentElement.appendChild(resumen);

    // Evento para eliminar productos
    container.addEventListener('click', e => {
        if (e.target.classList.contains('eliminar-item')) {
            const index = parseInt(e.target.getAttribute('data-index'));

            let carritoPlano = JSON.parse(localStorage.getItem('carrito')) || [];
            const productoAEliminar = carrito[index];

            // Eliminar todas las ocurrencias de ese producto
            carritoPlano = carritoPlano.filter(p => p.producto !== productoAEliminar.producto);

            localStorage.setItem('carrito', JSON.stringify(carritoPlano));
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Eliminado del carrito!",
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
                location.reload(); // recarga al terminar el swal
            });
        }
    });

    // Finalizar compra
    document.getElementById('finalizar-compra').addEventListener('click', () => {
        window.location.href="finalizar-compra.html"
    });
});
