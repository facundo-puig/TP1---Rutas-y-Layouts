import * as cheerio from "cheerio";

function normalizarUrl(url) {
    if (!url) return null;
    if (url.startsWith("//")) return `https:${url}`;
    return url;
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const categoria = searchParams.get("categoria");

    const url = categoria
        ? `https://www.hardgamers.com.ar/search?category=${categoria}`
        : "https://www.hardgamers.com.ar";

    const res = await fetch(url, {
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
        },
    });

    const html = await res.text();
    const $ = cheerio.load(html);

    const productos = [];

    $("article.One-Bit-Product").each((i, el) => {
        const nombre = $(el).find("[itemprop='name']").text().trim();
        const precio = $(el).find("[itemprop='price']").attr("content");
        const imagenRaw =
            $(el).find(".img-container img").attr("src") ||
            $(el).find("img[itemprop='image']").attr("src") ||
            null;

        const imagen = normalizarUrl(imagenRaw);

        const slug = nombre
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]/g, "_")
            .replace(/_+/g, "_")
            .replace(/^_|_$/g, "");

        if (nombre && precio) {
            productos.push({
                id: i + 1,
                nombre,
                precio: parseInt(precio),
                imagen,
                slug,
                categoria,
                marca: null,
                descripcion: null,
            });
        }
    });

    const palabrasClave = {
        "placas-de-video": ["gpu", "geforce", "radeon", "rtx", "gtx", "rx", "placa de video", "nvidia", "amd"],
        "microprocesadores": ["ryzen", "core", "intel", "amd", "procesador", "cpu"],
        "memorias-ram": ["ddr3", "ddr4", "ddr5", "ram"],
        "almacenamiento": ["hdd", "nvme", "disco", "pen", "drive", "pendrive"],
    };

    const filtros = palabrasClave[categoria] || [];

    const productosFiltrados = filtros.length > 0
        ? productos.filter(p =>
            filtros.some(palabra =>
                new RegExp(`\\b${palabra}\\b`, "i").test(p.nombre)
            )
        )
        : productos;

    // Si coincide el mismo slug, conserva el producto más barato
    const masBaratoPorSlug = new Map();
    for (const p of productosFiltrados) {
        const existente = masBaratoPorSlug.get(p.slug);
        if (!existente || p.precio < existente.precio) {
            masBaratoPorSlug.set(p.slug, p);
        }
    }
    const productosUnicos = Array.from(masBaratoPorSlug.values());

    return Response.json(productosUnicos);
}