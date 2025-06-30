
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

