document.addEventListener('DOMContentLoaded', function() {
    const navbar = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-2 mt-3 mb-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="logo.png" alt="logo" width="100">
                    <strong class="ms-2">Sport Shop</strong>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarMenu">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="loNuevo.html">Lo Nuevo</a></li>
                        <li class="nav-item"><a class="nav-link" href="hombre.html">Hombre</a></li>
                        <li class="nav-item"><a class="nav-link" href="mujer.html">Mujer</a></li>
                        <li class="nav-item"><a class="nav-link" href="nino.html">Niño/a</a></li>
                        <li class="nav-item"><a class="nav-link text-danger" href="ofertas.html">Ofertas</a></li>
                    </ul>
                </div>
                <form class="d-flex align-items-center">
                    <input class="form-control form-control-sm me-2 d-none d-lg-block" type="search" placeholder="Buscar">
                    <button class="btn btn-light btn-sm me-3 d-none d-lg-block" type="submit">
                        <i class="bi bi-search"></i>
                    </button>
                    <a href="iniciarSesion.html" class="text-white me-3"><i class="bi bi-person" style="font-size: 1.2rem;"></i></a>
                    <a href="favoritos.html" class="text-danger me-3"><i class="bi bi-heart" style="font-size: 1.2rem;"></i></a>
                    <a href="carrito.html" class="text-white"><i class="bi bi-bag" style="font-size: 1.2rem;"></i></a>
                </form>
            </div>
        </nav>
    `;
    document.getElementById('navbar').innerHTML = navbar;
});

const mensajes = [
    { texto: "🚚 Envío gratis en compras mayores a $999", enlace: "index.html" },
    { texto: "🔥 Unete para recibir informacion sobre productos exclusivos disponibles solo esta semana", enlace: "iniciarSesion.html" },
    { texto: "🎁 Ofertas exclusivas de todos los productos", enlace: "ofertas.html" },
];

let indice = 0;
const ticker = document.getElementById("mensaje-ticker");

function mostrarMensaje() {
    ticker.textContent = mensajes[indice].texto;
    ticker.href = mensajes[indice].enlace;
    indice = (indice + 1) % mensajes.length;
}

// Inicializa
mostrarMensaje();
// Cambia cada 5 segundos
setInterval(mostrarMensaje, 5000);

