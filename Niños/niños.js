const productos = [
    {
        producto: "Playera",
        categoria: "Niño/a",
        precio: 200,
        preciooferta: 0,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://m.media-amazon.com/images/I/41gy8zPjD+L._SY1000_.jpg",
        descripcion: "playera de algodón 100% con diseño moderno."
    },

    {
        producto: "Sudadera Champion color Azul",
        categoria: "Niño/a",
        precio: 300,
        preciooferta: 0,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://www.championmexico.com.mx/cdn/shop/files/Sudadera-Nino-AzulRey-305903NU2_1.jpg?v=1711846983",
        descripcion: "Sudadera marcha champions color azul celeste."
    },
    {
        producto: "Pantalon de pants",
        categoria: "Niño/a",
        precio: 250,
        preciooferta: 0,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://ss433.liverpool.com.mx/xl/1072323251.jpg",
        descripcion: "Pantalon de pants de algodón 100% con diseño moderno."
    },
    {
        producto: "Chamarra",
        categoria: "Niño/a",
        precio: 350,
        preciooferta: 0,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://martimx.vtexassets.com/arquivos/ids/1273359/1127967182-1.png?v=638579683412830000",
        descripcion: "Chamarra unisex de algodón 100% con diseño moderno."
    },
    {
        producto: "Short",
        categoria: "Niño/a",
        precio: 200,
        preciooferta: 0,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d37e8015-79a1-45d4-a596-f6b89822d665/K+NK+DF+TRPHY23+SHORT+GX.png",
        descripcion: "Short color negro para niño/a."
    },
    {
        producto: "Conjunto de color negro",
        categoria: "Niño/a",
        precio: 400,
        preciooferta: 0,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd5d36b5-31c7-40e0-b793-0aa854e5dbc1/sportswear-club-fleece-sudadera-con-capucha-nino-a-XxZcfQ.png",
        descripcion: "Conjunto de pants color negro"
    },
    {
        producto: "Conjunto de color verde",
        categoria: "Niño/a",
        precio: 1200,
        preciooferta: 0,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d96fe8e4-ea6b-46af-be3a-fa6f6b09cf4f/sudadera-con-gorro-talla-grande-sportswear-club-fleece-twzNLC.png",
        descripcion: "Conjunto de pants de color verde unisex."
    },
    {
        producto: "Conjunto de color Negro con rojo",
        categoria: "Niño/a",
        precio: 500,
        preciooferta: 0,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://surtidoradepartamental.vteximg.com.br/arquivos/ids/457787/180000098380_1.jpg?v=638250048912570000",
        descripcion: "Conjunto de short y playera color negro con rojo."
    },
    {
        producto: "Playera de futbol unisex",
        categoria: "Niño/a",
        precio: 800,
        preciooferta: 0,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/597f53d5-d9a7-4ef3-8426-e5e5ae4543c9/CA+Y+NK+DF+JSYSS+STAD+HM.png",
        descripcion: "Playera de futbol Unisex del América"
    },
    {
        producto: "Conjunto de futbol Niño/a",
        categoria: "Niño/a",
        precio: 1200,
        preciooferta: 0,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61cd991b-c65d-4efc-8998-073b7b9cc1aa/CFC+Y+NK+DF+JSY+SS+STAD+HM.png",
        descripcion: "Conjunto de uniforme de futbol para niño."
    }

];

function renderizarProductos() {
    let contenedorNino = document.getElementById("contenedor-dinamico");
    let card = ``

    productos.map((producto) => {
        const nombre = producto.producto.replace(/'/g, "\\'");
        const descripcion = producto.descripcion.replace(/'/g, "\\'");
        const tallas = JSON.stringify(producto.tallas).replace(/'/g, "\\'");
        const imagen = producto.imagen;
        const precio = producto.precio;
        const precioOferta = producto.preciooferta;
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
            <p class="card-text">
                <span class="fs-5">${precioFormateado}</span>
            </p>
            <div class="mb-3">
                <h6>Tallas disponibles:</h6>
                <div class="d-flex flex-wrap">
                    ${producto.tallas.map(talla =>
            `<span class="badge bg-secondary tallas-badge m-1">${talla}</span>`
        ).join('')}
                </div>
            </div>
            <button 
                onclick="verDetalles(this)"
                class="btn btn-outline-secondary mb-2"
                data-producto="${producto.producto}"
                data-categoria="${"Niño/a"}"
                data-descripcion="${producto.descripcion.replace(/"/g, '&quot;')}"
                data-tallas='${JSON.stringify(producto.tallas)}'
                data-imagen="${producto.imagen}"
                data-precio="${producto.precio}"
                data-preciooferta="${producto.precioOferta}"
                data-descuento="${producto.descuento || 0}"
            >
                Ver detalles
            </button>
                <button 
                    onclick="addCart(this)"
                    class="btn fondo-negro-medio d-flex align-items-center gap-2 add-to-cart"
                    data-producto="${producto.producto}"
                    data-categoria="${"Niño/a"}"
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
    console.log(card);

    contenedorNino.innerHTML = card

}

// Llamar a la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', renderizarProductos);

