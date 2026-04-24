// lib/productos.js
export const productos = [
    // Placas de Video - AMD
    {
        id: 1,
        nombre: "Placa de Video Asrock Radeon RX 7600 8GB",
        precio: 480000, categoria: "placas-de-video",
        marca: "amd",
        slug: "asrock-radeon-rx-7600-8gb",
        imagen: "/productos/rx7600.png",
        descripcion: "La Radeon RX 7600 de ASRock cuenta con 8GB de memoria GDDR6 y arquitectura RDNA 3, ideal para gaming en 1080p con altas tasas de fotogramas y soporte para ray tracing.",
        destacado: true
    },
    {
        id: 2,
        nombre: "Placa de Video XFX Radeon RX 9060 XT 16GB",
        precio: 758000,
        categoria: "placas-de-video",
        marca: "amd",
        slug: "xfx-radeon-rx-9060-xt-16gb",
        imagen: "/productos/rx9060xt.png",
        descripcion: "La XFX Radeon RX 9060 XT de 16GB GDDR6 ofrece un salto generacional con arquitectura RDNA 4, perfecta para gaming en 1440p con excelente eficiencia energética."
    },
    {
        id: 3,
        nombre: "Placa de Video XFX Radeon RX 9070 XT 16GB",
        precio: 1272000, categoria: "placas-de-video",
        marca: "amd",
        slug: "xfx-radeon-rx-9070-xt-16gb",
        imagen: "/productos/rx9070xt.png",
        descripcion: "La XFX Radeon RX 9070 XT es la opción premium de AMD con 16GB GDDR6, diseñada para gaming en 4K y 1440p con máxima calidad visual y soporte para FSR 4."
    },

    // Placas de Video - Nvidia
    {
        id: 4,
        nombre: "Placa de Video ASUS DUAL GeForce RTX 3050 6GB",
        precio: 397000,
        categoria: "placas-de-video",
        marca: "nvidia",
        slug: "asus-dual-rtx-3050-6gb",
        imagen: "/productos/rtx3050.png",
        descripcion: "La ASUS DUAL GeForce RTX 3050 de 6GB es una placa de entrada con soporte para ray tracing y DLSS, ideal para gaming en 1080p con un diseño compacto de doble ventilador.",
        destacado: true
    },
    {
        id: 5,
        nombre: "Placa de Video MSI GeForce RTX 5060 8GB",
        precio: 66000, categoria: "placas-de-video",
        marca: "nvidia",
        slug: "msi-rtx-5060-8gb",
        imagen: "/productos/rtx5060.png",
        descripcion: "La MSI GeForce RTX 5060 de 8GB GDDR7 es la nueva generación de placas mid-range con arquitectura Blackwell, DLSS 4 y excelente rendimiento en 1080p y 1440p."
    },
    {
        id: 6,
        nombre: "Placa de Video Zotac GeForce RTX 5070 12GB",
        precio: 1185000,
        categoria: "placas-de-video",
        marca: "nvidia",
        slug: "zotac-rtx-5070-12gb",
        imagen: "/productos/rtx5070.png",
        descripcion: "La Zotac GeForce RTX 5070 de 12GB GDDR7 combina arquitectura Blackwell con alto rendimiento en 1440p y 4K, con soporte para DLSS 4 y Frame Generation."
    },

    // Procesadores - AMD
    {
        id: 7,
        nombre: "Procesador AMD Ryzen 5 8500G 5.0GHz",
        precio: 220700,
        categoria: "procesadores",
        marca: "amd",
        slug: "ryzen-5-8500g",
        imagen: "/productos/ryzen5_8500g.png",
        descripcion: "El AMD Ryzen 5 8500G incluye gráficos integrados Radeon 740M y 6 núcleos a 5.0GHz, perfecto para armar una PC sin necesidad de placa de video dedicada.",
        destacado: true
    },
    {
        id: 8,
        nombre: "Procesador AMD Ryzen 7 5700X 4.6GHz",
        precio: 334000,
        categoria: "procesadores",
        marca: "amd",
        slug: "ryzen-7-5700x",
        imagen: "/productos/ryzen7.png",
        descripcion: "El AMD Ryzen 7 5700X ofrece 8 núcleos y 16 hilos a 4.6GHz con arquitectura Zen 3, una opción de gran rendimiento para gaming y multitarea sin consumo excesivo."
    },
    {
        id: 9,
        nombre: "Procesador AMD Ryzen 9 9900X 5.6GHz",
        precio: 699000,
        categoria: "procesadores",
        marca: "amd", slug: "ryzen-9-9900x",
        imagen: "/productos/ryzen9.png",
        descripcion: "El AMD Ryzen 9 9900X es el procesador de alta gama con 12 núcleos Zen 5 a 5.6GHz, ideal para creadores de contenido, streaming y gaming de alto rendimiento."
    },

    // Procesadores - Intel
    {
        id: 10,
        nombre: "Procesador Intel Core i5 12400F 4.4GHz",
        precio: 230500,
        categoria: "procesadores",
        marca: "intel",
        slug: "intel-core-i5-12400f",
        imagen: "/productos/i5_12400f.png",
        descripcion: "El Intel Core i5-12400F ofrece 6 núcleos con tecnología híbrida a 4.4GHz, una de las mejores opciones precio-rendimiento para gaming en 1080p y 1440p.",
        destacado: true
    },
    {
        id: 11,
        nombre: "Procesador Intel Core i7 12700KF 5.0GHz",
        precio: 435000,
        categoria: "procesadores",
        marca: "intel",
        slug: "intel-core-i7-12700kf",
        imagen: "/productos/i7_12700KF.png",
        descripcion: "El Intel Core i7-12700KF cuenta con 12 núcleos heterogéneos a 5.0GHz, ideal para gaming exigente, edición de video y cargas de trabajo intensivas."
    },
    {
        id: 12,
        nombre: "Procesador Intel Core i9 14900F 5.8GHz",
        precio: 975000,
        categoria: "procesadores",
        marca: "intel",
        slug: "intel-core-i9-14900f",
        imagen: "/productos/i9.png",
        descripcion: "El Intel Core i9-14900F es el procesador flagship con 24 núcleos a 5.8GHz, diseñado para las tareas más exigentes: renderizado 3D, streaming y gaming profesional."
    },

    // Almacenamiento
    {
        id: 13,
        nombre: "Disco Solido SSD Patriot 240GB",
        precio: 74500,
        categoria: "almacenamiento",
        marca: null,
        slug: "ssd-patriot-240gb",
        imagen: "/productos/ssd_patriot_240gb.png",
        descripcion: "El SSD Patriot de 240GB en formato 2.5\" SATA ofrece velocidades de lectura de hasta 560MB/s, ideal para instalar el sistema operativo y mejorar notablemente los tiempos de carga.",
        destacado: true
    },
    {
        id: 14,
        nombre: "Disco Solido SSD M.2 WD 500GB Green",
        precio: 138000,
        categoria: "almacenamiento",
        marca: null,
        slug: "ssd-wd-500gb-green",
        imagen: "/productos/ssd_wdgreen.png",
        descripcion: "El WD Green M.2 de 500GB es un SSD NVMe de bajo consumo con velocidades de hasta 2400MB/s, perfecto para quienes buscan una actualización rápida y silenciosa."
    },
    {
        id: 15,
        nombre: "Disco Duro HDD 2TB Western Digital",
        precio: 155499,
        categoria: "almacenamiento",
        marca: null,
        slug: "hdd-wd-2tb",
        imagen: "/productos/wd2tb.png",
        descripcion: "El disco duro Western Digital de 2TB ofrece gran capacidad de almacenamiento a un precio accesible, ideal para guardar juegos, archivos multimedia y backups."
    },

    // Memorias RAM
    {
        id: 16,
        nombre: "Memoria Corsair DDR5 64GB (2x32GB) 6000MHz",
        precio: 1544750,
        categoria: "memorias-ram",
        marca: null,
        slug: "corsair-ddr5-64gb-6000mhz",
        imagen: "/productos/corsair_32gb.png",
        descripcion: "El kit Corsair DDR5 de 64GB (2x32GB) a 6000MHz es la solución definitiva para workstations y PCs de alto rendimiento, con XMP 3.0 y diseño de perfil bajo.",
        destacado: true
    },
    {
        id: 17,
        nombre: "Memoria Patriot Viper DDR4 16GB 3600MHz",
        precio: 249000,
        categoria: "memorias-ram",
        marca: null,
        slug: "patriot-viper-ddr4-16gb",
        imagen: "/productos/ramviper.png",
        descripcion: "La Patriot Viper DDR4 de 16GB a 3600MHz ofrece alto rendimiento con disipador de aluminio rojo, compatible con AMD EXPO e Intel XMP para overclock sencillo."
    },
    {
        id: 18,
        nombre: "Memoria Kingston DDR5 16GB 5600Mhz",
        precio: 365000,
        categoria: "memorias-ram",
        marca: null,
        slug: "kingston-ddr5-16gb-5600mhz",
        imagen: "/productos/ramfury.png",
        descripcion: "La Kingston Fury DDR5 de 16GB a 5600MHz combina velocidad de nueva generación con compatibilidad garantizada para las últimas plataformas Intel y AMD."
    },
];