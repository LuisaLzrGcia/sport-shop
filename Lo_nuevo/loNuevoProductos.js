const productos = [
    {
        producto: "Nike Phantom 6 High Elite",
        precio: 6599.00,
        categoria: "Lo_Nuevo",
        tallas: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
        imagen: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40263d2d-4357-4aa2-a331-5f3b28be9636/PHANTOM+6+HIGH+ELITE+FG+LV8.png",
        descripcion: "¿Te obsesiona la precisión? A nosotros también. Por eso hemos diseñado los Phantom 6 Elite con el revolucionario Gripknit para potenciar tu precisión. La textura adherente mejora el contacto del pie con el balón y ayuda a aprovechar cualquier oportunidad, porque fallar no es una opción. Te da una ventaja inigualable para anotar goles al combinarla con la placa de tracción Cyclone 360 para todos esos cortes rápidos."
    },
    {
        producto: "Nike Mercurial Superfly 10 Elite",
        precio: 7299.00,
        categoria: "Lo_Nuevo",
        tallas: ["S", "M", "L"],
        imagen: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f566f622-874a-4ecd-9bd1-47f52cbe8c53/ZM+SUPERFLY+10+ELITE+FG+LV8.png",
        descripcion: "¿La velocidad es tu obsesión? También para las mayores estrellas del fútbol. Por eso, creamos estos tacos Elite con una unidad Air Zoom mejorada de 3/4 de largo. Les ofrece a ti y a los jugadores más rápidos del deporte la sensación de propulsión necesaria para abrirse paso desde la línea de fondo. Esto resulta en los tacos Mercurial más responsivos que hemos creado hasta la fecha, porque tú exiges grandeza de ti mismo y de tus tenis."
    },
    {
        producto: "Paris Saint-Germain Air Max Plus Premium",
        precio: 4299.00,
        categoria: "Lo_Nuevo",
        tallas: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
        imagen:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7b642882-b274-4faf-9ace-e2ffd3133913/NIKE+AIR+MAX+PLUS+PRM.png",
        descripcion: "Deja que tu actitud marque la diferencia con esta edición PSG de los Air Max Plus. La malla transpirable te ayuda a mantener la frescura, mientras que la amortiguación visible te permite celebrar a tu equipo con comodidad."
    },
    {
        producto: "Nike Free Metcon6",
        precio: 2899.00,
        categoria: "Lo_Nuevo",
        tallas: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
        imagen: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/11dd18fc-9ee2-4e3e-85e2-19ff6b51eddf/NIKE+FREE+METCON+6.png",
        descripcion: "Desde levantamiento de potencia hasta escaleras, desde briznas de hierba hasta plataformas granuladas, del pasto sintético (turf) a la pista; tu entrenamiento tienen un propósito determinado, un enfoque específico..."
    },
    {
        producto: "Playera Real Madrid",
        precio: 1999.00,
        categoria: "Lo_Nuevo",
        tallas: ["S", "M", "L"],
        imagen: "https://site-product.innovasport.com/img-test/JJ1931/JJ1931_1-1200x1200.jpg",
        descripcion: "Sigue cada partido de La Liga y la Champions League usando el Jersey adidas Real Madrid Local 25/26, esta prenda está inspirada en la última remodelación del Santiago Bernabéu."
    },
    {
        producto: "Playera de México",
        precio: 1119.00,
        categoria: "Lo_Nuevo",
        tallas: ["S", "M", "L"],
        imagen: "https://unicosmoderna.com/cdn/shop/files/PLAYERA-ADIDAS-IP6379-CABALLERO-MULTICOLOR-206160-_5.jpg?v=1745880866&width=1365",
        descripcion: "Salta a la cancha y luce como todo un profesional usando el Jersey adidas Selección Nacional de México Local 2024 Authentic, esta equipación te dará un estilo único mientras practicas el deporte que tanto te apasiona."
    },
    {
        producto: "Polo Tech Po",
        precio: 899.00,
        categoria: "Lo_Nuevo",
        tallas: ["S", "M", "L"],
        imagen: "https://underarmour.scene7.com/is/image/Underarmour/PS1370399-100_HF?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708",
        descripcion: "Presenta un corte clásico con mangas cortas y cuello polo, se ajustará de manera perfecta a tu cuerpo y te podrás mover con una total libertad..."
    },
    {
        producto: "Playera Adidas Adizero",
        precio: 699.00,
        categoria: "Lo_Nuevo",
        tallas: ["S", "M", "L"],
        imagen: "https://www.innovasport.com/medias/IS-IN1156-1.jpg?context=bWFzdGVyfGltYWdlc3w3ODAzN3xpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnNU15OW9Nell2TVRJek56RTRNakkzTXprME9EWXVhbkJufDdkMzlmYmFiMDZjODAwNGFmYzM4MmEwMTk5MTFjN2UyZTAxNGQ2YzI4ZTY5ODE5YjcwYzNjNmEwMTYxYzI2MjQ",
        descripcion: "Presenta un corte clásico con mangas cortas y cuello redondo, se ajustará de manera perfecta a tu cuerpo y te podrás mover con una total libertad. Fue hecha con materiales reciclados..."
    },
    {
        producto: "Mochila Under Armour",
        precio: 1299.00,
        categoria: "Lo_Nuevo",
        tallas: ["Unitalla"],
        imagen: "https://site-product.innovasport.com/img-test/1384672-289/1384672-289_1-1200x1200.jpg",
        descripcion: "Esta mochila fue confeccionada con un tejido 100% de poliéster que da una gran durabilidad, cuenta con tecnología UA Storm que repele el agua..."
    },
    {
        producto: "Mochila New Era Los Angeles Dodgers",
        precio: 999.00,
        categoria: "Lo_Nuevo",
        tallas: ["Unitalla"],
        imagen: "https://www.innovasport.com/medias/IS-60503785-1.jpg?context=bWFzdGVyfGltYWdlc3wxMTcyOTN8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzBOaTlvTW1Ndk1USTNPREF6T0RZeU5UUTROemd1YW5CbnwzMWI1NmFiZjdkOWVmOTk1ZjQwNTY4MGM2NjJkZTI5ZDZhOWE2NTNmOTg3ZTMyZWJhNGU1NDU3OTBlY2Q5ODNh",
        descripcion: "Esta mochila fue confeccionada con un tejido 100% de poliéster que ofrece una durabilidad prolongada para uso diario, presenta el logo de los Dodgers..."
    }
];
