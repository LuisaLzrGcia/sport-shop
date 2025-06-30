const productos = [
    {
        producto: "Camiseta Toluca FC",
        precio: 20.00,
        precioOferta: 15.00,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://www.newbalancemexico.com/on/demandware.static/-/Sites-MX_catalog_master_sfcc/es_MX/v1750875430451/images/mt832107hme_nb_0.png?wid=880&hei=880",
        descripcion: "Camiseta deportiva del actual campeón del futbol mexicano. Ideal para mostrar tu apoyo al equipo y lucir un estilo moderno y deportivo. ¡No te quedes sin la tuya!"
    },
    {
        producto: "Pantalon Deportivo Escencial",
        precio: 35.00,
        precioOferta: 30.00,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://nb.scene7.com/is/image/NB/mp43551bk_nb_70_i?wid=880&hei=880",
        descripcion: "Descubre estos pantalones casuales color all black New Balance para hombre, son un básico versátil para el día a día que se adapta a tu estilo de vida activo y moderno. ¡No te quedes sin los tuyos y cómpralos ya!."
    },
    {
        producto: "Nike Metcon 1 OG",
        precio: 50.00,
        precioOferta: 45.00,
        tallas: ["24", "25", "26", "27", "28", "29", "30"],
        imagen: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0497151c-ea67-46c5-a3ac-35fa977d11d1/NIKE+METCON+1+OG.png",
        descripcion: "Los Metcon 1 regresaron con un diseño realmente minimalista."
    },
    {
        producto: "Nike Air Max 270",
        precio: 120.00,
        precioOferta: 100.00,
        tallas: ["24", "25", "26", "27", "28", "29", "30"],
        imagen: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0c6f3b2d-4e5a-4b7c-9d1f-2e8f0a3b5c7c/air-max-270-mens-shoes.png",
        descripcion: "Las Nike Air Max 270 combinan estilo y comodidad con una gran unidad Air en el talón."
    },
    {
        producto: "Adidas Ultraboost 21",
        precio: 180.00,
        precioOferta: 160.00,
        tallas: ["24", "25", "26", "27", "28", "29", "30"],
        imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto,fl_lossy,pg_1/3c8b2f0d4f5e4a6a9d7c/Ultraboost_21_Shoes_Black_GZ5550_01_standard.jpg",
        descripcion: "Las Adidas Ultraboost 21 ofrecen una pisada suave y reactiva, perfectas para correr largas distancias."
    },
    {
        producto: "Puma RS-X",
        precio: 110.00,
        precioOferta: 95.00,
        tallas: ["24", "25", "26", "27", "28", "29", "30"],
        imagen: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/374930/01/mod01/fnd/PNA/fmt/png",
        descripcion: "Los Puma RS-X son una declaración de estilo con su diseño retro y comodidad excepcional."
    },
    {
        producto: "NikeDrift T-Shirt",
        precio: 25.00,
        precioOferta: 15.00,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3a3d1d37-1521-4346-9185-23e9c25622af/M+NK+DF+TEE+RLGD+RESET.png",
        descripcion: "Como actualización de la playera Legend, esta playera absorbente de sudor es suave en todas las formas correctas. También la recortamos con un ajuste más relajado y holgado que las versiones anteriores para que puedas lograr todas tus repeticiones sin perder el ritmo."     
    },
    {
        producto: "Adidas Essentials 3-Stripes",
        precio: 30.00,
        precioOferta: 25.00,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto,fl_lossy,pg_1/5c8b2f0d4f5e4a6a9d7c/Essentials_3-Stripes_T-Shirt_Black_GD5946_01_standard.jpg",
        descripcion: "La camiseta Essentials 3-Stripes de Adidas es un clásico atemporal con un toque moderno."
    },
    {
        producto: "Under Armour Tech 2.0",
        precio: 28.00,
        precioOferta: 22.00,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://underarmour.scene7.com/is/image/Underarmour/1326416-001?wid=880&hei=880&fmt=png-alpha",
        descripcion: "La camiseta Under Armour Tech 2.0 es perfecta para entrenar, con tecnología que absorbe el sudor y te mantiene fresco."
    },
    {
        producto: "Reebok Workout Ready",
        precio: 32.00,
        precioOferta: 28.00,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://assets.reebok.com/images/w_600,f_auto,q_auto,fl_lossy,pg_1/3c8b2f0d4f5e4a6a9d7c/Workout_Ready_T-Shirt_Black_GD5946_01_standard.jpg",
        descripcion: "La camiseta Workout Ready de Reebok es ideal para tus entrenamientos, con un diseño cómodo y funcional."
    },
    {
        producto: "Nike Totality",
        precio: 60.00,
        precioOferta: 55.00,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/06f55d66-c1fd-4bb3-a416-f31564ad7bd8/M+NK+DF+TOTALITY+KNIT+7IN+UL.png",
        descripcion: "Diseñados para el entrenamiento, nuestros shorts Totality absorbentes de sudor te permiten mantener la simplicidad y la frescura."
    },
    {
        producto: "Adidas 4KRFT",
        precio: 45.00,
        precioOferta: 40.00,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto,fl_lossy,pg_1/3c8b2f0d4f5e4a6a9d7c/4KRFT_Short_Black_GD5946_01_standard.jpg",
        descripcion: "Los shorts Adidas 4KRFT son perfectos para entrenar con comodidad y estilo."
    },
    {
        producto: "Puma Active Training",
        precio: 50.00,
        precioOferta: 45.00,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/374930/01/mod01/fnd/PNA/fmt/png",
        descripcion: "Los shorts Puma Active Training son ideales para tus sesiones de entrenamiento, con un diseño cómodo y funcional."
    },
    {
        producto: "Under Armour Launch SW 7",
        precio: 55.00,
        precioOferta: 50.00,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://underarmour.scene7.com/is/image/Underarmour/1326416-001?wid=880&hei=880&fmt=png-alpha",
        descripcion: "Los shorts Under Armour Launch SW 7 son perfectos para correr, con un diseño ligero y transpirable."
    },
    {
        producto: "Reebok Speedwick",
        precio: 48.00,
        precioOferta: 42.00,
        tallas: ["S", "M", "L", "XL"],
        imagen: "https://assets.reebok.com/images/w_600,f_auto,q_auto,fl_lossy,pg_1/3c8b2f0d4f5e4a6a9d7c/Speedwick_Short_Black_GD5946_01_standard.jpg",
        descripcion: "Los shorts Reebok Speedwick son ideales para entrenar con comodidad y estilo."
    },
    {
        producto: "Adidas Ultraboost 22",
        precio: 200.00,
        precioOferta: 180.00,
        tallas: ["24", "25", "26", "27", "28", "29", "30"],
        imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto,fl_lossy,pg_1/3c8b2f0d4f5e4a6a9d7c/Ultraboost_22_Shoes_Black_GZ5550_01_standard.jpg",
        descripcion: "Las Adidas Ultraboost 22 ofrecen una pisada suave y reactiva, perfectas para correr largas distancias."
    }
]