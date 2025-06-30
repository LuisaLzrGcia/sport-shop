import { productos } from './ofertasProductos.js';
let ofertas = document.getElementById("ofertas-container");
let card = ``

productos.map((producto) => {
    const nombre = producto.producto.replace(/'/g, "\\'");
    const categoria = producto.categoria.replace(/'/g, "\\'");
    const descripcion = producto.descripcion.replace(/'/g, "\\'");
    const tallas = JSON.stringify(producto.tallas).replace(/'/g, "\\'");
    const imagen = producto.imagen;
    const precio = producto.precio;
    const precioOferta = producto.precioOferta;
    const descuento = producto.descuento;

    const precioFormateado = precio.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
    });

    const precioOfertaFormateado = precioOferta.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
    });

    card += `
    <div class="card" style="width: 18rem;">
        <img src="${producto.imagen}"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.producto}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <span class=" badge fondo-verde-oscuro">${producto.descuento}% de descuento</span>
            <p class="card-text">
                <span class="fs-5">${precioOfertaFormateado}</span>
                <span class="text-decoration-line-through text-body-secondary">${precioFormateado}</span>
            </p>
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
    `})

ofertas.innerHTML = card