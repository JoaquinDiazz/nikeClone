// MENU HAMBURGUESA
const nav         = document.querySelector(".nav");
const botonAbrir  = document.querySelector(".open");
const botonCerrar = document.querySelector(".close");

botonAbrir.addEventListener("click", () => {
    nav.classList.add("active")
    document.body.classList.add("modalAbierto")
})
botonCerrar.addEventListener("click", () => {
    nav.classList.remove("active")
    document.body.classList.remove("modalAbierto")
})

// MODAL CARRITO
const open  = document.querySelector("#openCarrito")
const close = document.querySelector("#closeCarrito")
const modal = document.querySelector(".carrito")

open.addEventListener("click", () => {
    modal.classList.add("active")
    document.body.classList.add("modalAbierto")
})

close.addEventListener("click", () => {
    modal.classList.remove("active")
    document.body.classList.remove("modalAbierto")
})

// CARRUSEL 3 CUOTAS
const leftArrow  = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const parrafos   = document.querySelectorAll(".parrafos");

leftArrow.addEventListener("click", () =>  mover(-1));
rightArrow.addEventListener("click", () =>  mover(1));

function mover(numero) {
    const currentElement = Number(document.querySelector(".parrafo-active").dataset.id)

    let value = currentElement;
    value+= numero;

    if( value === 0 || value == parrafos.length + 1) {
        value = value === 0 ? parrafos.length : 1
    }

    parrafos[currentElement-1].classList.toggle("parrafo-active");
    parrafos[value-1].classList.toggle("parrafo-active");
}

// MODAL DE FILTROS

// const btnAbrirFiltros  = document.querySelector("#btnFiltros");
// const filtros          = document.querySelector("#filtros");
// const btnCerrarFiltros = document.querySelector("#btnCerrarFiltros");
// console.log(btnAbrirFiltros)

// btnAbrirFiltros.addEventListener("click", () => {
//     filtros.classList.add("active")
//     document.body.classList.add("modalAbierto")
// })

// btnCerrarFiltros.addEventListener("click", () => {
//     filtros.classList.remove("active")
//     document.body.classList.remove("modalAbierto")
// })

// ARRAY DE PRODUCTOS
const productosNike = [
    {
        nombre: "Nike Essential",
        id: "NikeEssential",
        descripcion: "Pantalón de Running para Hombre",
        precio: 24700,
        color: "gris",
        imagen: "../img/pageProductos/nikeEssential.png",
        genero: "hombre",
        coleccion: "running",
        tipo:"pantalon",
    },
    {
        nombre: "Nike Air",
        id: "NikeAir",
        descripcion: "Pantalón de Moda para Mujer",
        precio: 32000,
        color: "negro",
        imagen: "../img/pageProductos/nikeAir.webp",
        genero: "mujer",
        coleccion: "moda",
        tipo:"pantalon",
    },
    {
        nombre: "Nike Sportswear",
        id: "NikeSportswear",
        descripcion: "Pantalón de Moda para Mujer",
        precio: 28500,
        color: "rosa",
        imagen: "../img/pageProductos/nikeSport.webp",
        genero: "mujer",
        coleccion: "moda",
        tipo:"pantalon",

    },
    {
        nombre: "Nike Dri-FIT Phenom",
        id: "Dri-FITPhenom",
        descripcion: "Pantalón de Running para Hombre",
        precio: 38500,
        color: "negro",
        imagen: "../img/pageProductos/nikeDriFit.webp",
        genero: "hombre",
        coleccion: "running",
        tipo:"pantalon",
    },
    {
        nombre: "Nike Air Max Excee",
        id: "NikeAirMaxExcee",
        descripcion: "Zapatillas de Moda para Hombre",
        precio: 50000,
        color: "negro",
        imagen: "../img/pageProductos/nikeAirMax.webp",
        genero: "hombre",
        coleccion: "moda",
        tipo: "zapatilla",
    },
    {
        nombre: "Nike Invincible 3",
        id: "NikeInvincible3",
        descripcion: "Zapatillas de Running para Hombre",
        precio: 89000,
        color: "blanco",
        imagen: "../img/pageProductos/nikeInvincible.webp",
        genero: "hombre",
        coleccion: "running",
        tipo: "zapatilla",
    },
    {
        nombre: "Nike Zoom Fly 4",
        id: "NikeZoomFly4",
        descripcion: "Zapatillas de Running para Mujer",
        precio: 78000,
        color: "azul",
        imagen: "../img/pageProductos/nikeZoom.webp",
        genero: "mujer",
        coleccion: "running",
        tipo: "zapatilla",
    },
    {
        nombre: "Nike Air Zoom 39",
        id: "NikeAirZoom39",
        descripcion: "Zapatillas de Running para Mujer",
        precio: 57000,
        color: "rosas",
        imagen: "../img/pageProductos/nikePegasus.webp",
        genero: "mujer",
        coleccion: "running",
        tipo: "zapatilla",
    },
    {
        nombre: "Nike SB",
        id: "NikeSB",
        descripcion: "Remera de Moda para Hombre",
        precio: 16500,
        color: "gris",
        imagen: "../img/pageProductos/nikeSB.webp",
        genero: "hombre",
        coleccion: "moda",
        tipo: "remera",
    },
    {
        nombre: "Nike Dri-FIT Miler",
        id: "NikeDri-FITMiler",
        descripcion: "Remera de Running para Hombre",
        precio: 16500,
        color: "negro",
        imagen: "../img/pageProductos/nikeDriFitRemera.webp",
        genero: "hombre",
        coleccion: "running",
        tipo: "remera",
    },
    {
        nombre: "Jordan Flight",
        id: "JordanFlight",
        descripcion: "Remera Jordan para Mujer",
        precio: 17000,
        color: "roja",
        imagen: "../img/pageProductos/jordanFlight.webp",
        genero: "mujer",
        coleccion: "moda",
        tipo: "remera",
    },
    {
        nombre: "Nike Sportwear",
        id: "NikeSportwear",
        descripcion: "Remera de moda para Mujer",
        precio: 10000,
        color: "rosa",
        imagen: "../img/pageProductos/remeraRosa.webp",
        genero: "mujer",
        coleccion: "moda",
        tipo: "remera",
    },
    {
        nombre: "Nike Mercurial",
        id: "NikeMercurial",
        descripcion: "Botines de Futbol Unisex",
        precio: 47000,
        color: "negro",
        imagen: "../img/pageProductos/NikeMercurial.webp",
        genero: "unisex",
        coleccion: "futbol",
        tipo: "zapatilla",
    },
    {
        nombre: "Nike Heritage",
        id: "NikeHeritage",
        descripcion: "Mochila de Moda Unisex",
        precio: 20000,
        imagen: "../img/pageProductos/nikeHeritage.webp",
        color: "azul",
        genero: "unisex",
        coleccion: "moda",
        tipo: "accesorios",
    },
    {
        nombre: "Nike SB Classic99",
        id: "NikeSBClassic99",
        descripcion: "Gorra de Moda Unisex",
        precio: 12000,
        imagen: "../img/pageProductos/gorraSB.webp",
        color: "negro",
        genero: "unisex",
        coleccion: "moda",
        tipo: "accesorios",
    },
    {
        nombre: "Nike Multiplier",
        id: "NikeMultiplier",
        descripcion: "Medias de Running Unisex",
        precio: 5500,
        imagen: "../img/pageProductos/mediaRunning.webp",
        color: "negro",
        genero: "unisex",
        coleccion: "running",
        tipo: "accesorios",
    },
    {
        nombre: "Nike Dri-FIT Trophy",
        id: "NikeDri-FITTrophy",
        descripcion: "Remera de running para Niño",
        precio: 10000,
        imagen: "../img/pageProductos/NikeDri-FITTrophy.webp",
        color: "negro",
        genero: "niño",
        coleccion: "running",
        tipo: "remera",
    },
    {
        nombre: "FC Barcelona visitante",
        id: "FCBarcelonavisitante",
        descripcion: "Remera de fútbol para Niño",
        precio: 20000,
        imagen: "../img/pageProductos/FCBarcelonavisitante.webp",
        color: "gris",
        genero: "niño",
        coleccion: "futbol",
        tipo: "remera",
    },
    {
        nombre: "Nike Everyday",
        id: "NikeEveryday",
        descripcion: "Medias de Running Unisex",
        precio: 5500,
        imagen: "../img/pageProductos/mediasBlancas.webp",
        color: "blanco",
        genero: "unisex",
        coleccion: "running",
        tipo: "accesorios",
    },
    {
        nombre: "Nike Strike",
        id: "NikeStrike",
        descripcion: "Pelota de Futbol Unisex",
        precio: 18000,
        color: "blanco",
        imagen: "../img/pageProductos/nikeStrike.webp",
        genero: "unisex",
        coleccion: "futbol",
        tipo: "accesorios",
    },
]

// CARGAR PRODUCTOS
const sectionProductos = document.querySelector("#sectionProductos");
let btnAgregar = document.querySelectorAll(".btnAgregar");

function cargarProductos(productoElegido) {

    sectionProductos.innerHTML=""

    productoElegido.forEach( producto => {

        const div = document.createElement("div");
        div.classList.add("cardProducto");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}}" class="cardImg">
            <div class="cardBody">
                <p class="nombre">${producto.nombre}</p>
                <p class="descripcion">${producto.descripcion}</p>
                <div>
                    <p class="precio">$${producto.precio}</p>
                    <button class="blackBtn btnAgregar" id="${producto.id}">ADD TO CARD</button>
                </div>
            <div/>
        `
        sectionProductos.append(div);

    })
    actualizarBtnAgregar() 
}
cargarProductos(productosNike);
let carrito = [];

function actualizarBtnAgregar() {
    btnAgregar = document.querySelectorAll(".btnAgregar");
    
    btnAgregar.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idBtn = btn.id
            
            const existe = carrito.some(prod => prod.id ===idBtn)

            if(existe) {
                const prod = carrito.map(prod => {
                    prod.cantidad++
                })
            } else {
                const item = productosNike.find((prod) => prod.id === idBtn)
                item.cantidad = 1
                carrito.push(item)
            }

            cargarCarrito()
            localStorage.setItem("carritoLS", JSON.stringify(carrito))
            
            

        })
    });
}
const carritoVacio = document.querySelector("#carritoVacio");
const compra = document.querySelector("#compra");
const precioTotal = document.querySelector("#precioTotal");
const carritoEnLS = JSON.parse(localStorage.getItem("carritoLS"))
const total = document.querySelector("#total")
const numerito = document.querySelector("#numeritoCarrito")

function cargarCarrito() {

    compra.innerHTML = ""
    if(carritoEnLS) {

        carritoVacio.classList.add("disabled");
        compra.classList.remove("disabled");
        precioTotal.classList.remove("disabled");

        carrito.forEach((prod) => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                <img src="${prod.imagen}" alt="">
                <div class="detalles">
                    <p>${prod.nombre}</p>
                    <p>${prod.descripcion}</p>
                    <div class="cantidadProducto">
                        <i class="bi bi-plus-lg sumarCantidad" id="${prod.id}"></i>
                        <span>${prod.cantidad}</span>
                        <i class="bi bi-dash-lg restarCantidad" id="${prod.id}"></i>
                    </div>
                </div>
                <div class="eliminar">
                    <i class="bi bi-trash btnEliminar" id="${prod.id}"></i>
                    <p>${prod.precio * prod.cantidad}</p>
                </div>
                `
        compra.append(div)

        })
    } 
    if (carrito.length === 0) {
        carritoVacio.classList.remove("disabled");
        compra.classList.add("disabled");
        precioTotal.classList.add("disabled");
    }
    actualizarBtnEliminar()
    numerito.innerText = carrito.length
    total.innerText = `$${carrito.reduce((acc, prod) => acc + prod.precio, 0)}`
}
cargarCarrito()

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carritoLS")) || []
    cargarCarrito()
})

function actualizarBtnEliminar() {
    const btnEliminar = document.querySelectorAll(".btnEliminar")

    btnEliminar.forEach(btn => {
        btn.addEventListener("click", eliminarDelCarrito)
    })
}
function eliminarDelCarrito(e) {
    let idBtn = e.currentTarget.id
    carrito = carrito.filter((prod) => prod.id !== idBtn)
    cargarCarrito()
    localStorage.setItem("carritoLS", JSON.stringify(carrito))
}



const finalizarCompra = document.querySelector("#finalizarCompra");
finalizarCompra.addEventListener("click",() => {
    carrito.length = 0
    cargarCarrito()
    localStorage.setItem("carritoLS", JSON.stringify(carrito))
    alert("Gracia por su compra, vuelva prontos")
})

// MODAL DE FILTROS

const btnAbrirFiltros  = document.querySelector("#btnFiltros");
const filtros          = document.querySelector("#filtros");
const btnCerrarFiltros = document.querySelector("#btnCerrarFiltros");
console.log(btnAbrirFiltros)

btnAbrirFiltros.addEventListener("click", () => {
    filtros.classList.add("active")
    document.body.classList.add("modalAbierto")
})

btnCerrarFiltros.addEventListener("click", () => {
    filtros.classList.remove("active")
    document.body.classList.remove("modalAbierto")
})

// ACORDEON FILTROS
const headerAcordeon = document.querySelectorAll(".headerAcordeon");
const contenidoAcordeon = document.querySelectorAll(".contenidoAcordeon");

headerAcordeon.forEach((cadaUno, i) => {

    headerAcordeon[i].addEventListener("click", () => {

        contenidoAcordeon.forEach((cadaItem, i) => {
            contenidoAcordeon[i].classList.remove("active")
        })
        contenidoAcordeon[i].classList.toggle("active")
    })

})

// FILTROS POR GENERO
const tituloProductos = document.querySelector("#tituloDeProductos");
const btnFiltros = document.querySelectorAll(".btnFiltro");
const btnFiltrosGenero = document.querySelectorAll(".genero");

btnFiltrosGenero.forEach( boton => {

    boton.addEventListener("click", (e) => {

        btnFiltros.forEach(boton => boton.classList.remove("active"));
        boton.classList.add("active");

        const productoFiltradoPorGenero = productosNike.filter(producto => producto.genero === e.currentTarget.id.toLowerCase());
        cargarProductos(productoFiltradoPorGenero);
        window.scrollTo({ top: 0 })
        tituloProductos.innerText = e.currentTarget.id;

        filtros.classList.remove("active")
        document.body.classList.remove("modalAbierto")
    })
})
// FILTROS POR COLOR
const btnFiltrosColor = document.querySelectorAll(".color");
btnFiltrosColor.forEach( boton => {

    boton.addEventListener("click", (e) => {

        btnFiltros.forEach(boton => boton.classList.remove("active"));
        boton.classList.add("active");

        const productoFiltradoPorColor = productosNike.filter(producto => producto.color === e.currentTarget.id)
        cargarProductos(productoFiltradoPorColor);
        window.scrollTo({ top: 0 })
        tituloProductos.innerText = `Productos color ${e.currentTarget.id}`;

        filtros.classList.remove("active")
        document.body.classList.remove("modalAbierto")
    })
})
// FILTROS POR CATEGORIA
const btnFiltrosCategoria = document.querySelectorAll(".categoria");
btnFiltrosCategoria.forEach( boton => {

    boton.addEventListener("click", (e) => {

        btnFiltros.forEach(boton => boton.classList.remove("active"));
        boton.classList.add("active");

        const productoFiltradoPorCategoria = productosNike.filter(producto => producto.tipo === e.currentTarget.id.toLowerCase())
        cargarProductos(productoFiltradoPorCategoria);
        window.scrollTo({ top: 0 })
        tituloProductos.innerText = e.currentTarget.id;

        filtros.classList.remove("active")
        document.body.classList.remove("modalAbierto")
    })
})
// FILTROS POR COLECCION
const btnFiltrosColeccion = document.querySelectorAll(".coleccion");
btnFiltrosColeccion.forEach( boton => {

    boton.addEventListener("click", (e) => {

        btnFiltros.forEach(boton => boton.classList.remove("active"));
        boton.classList.add("active");

        const productoFiltradoPorCategoria = productosNike.filter(producto => producto.coleccion === e.currentTarget.id.toLowerCase())
        cargarProductos(productoFiltradoPorCategoria);
        window.scrollTo({ top: 0 })
        tituloProductos.innerText = e.currentTarget.id;

        filtros.classList.remove("active")
        document.body.classList.remove("modalAbierto")
    })
})
// FILTROS POR PRECIO
const mayorPrecio = document.querySelector("#mayorPrecio");
const menorPrecio = document.querySelector("#menorPrecio");

mayorPrecio.addEventListener("click", () => {
    let productosMasCaros = [...productosNike]
    productosMasCaros.sort((a,b) => b.precio - a.precio)
    cargarProductos(productosMasCaros)
    window.scrollTo({ top: 0 })
    tituloProductos.innerText = "Mas caros";

})

menorPrecio.addEventListener("click", () => {
    let productosMasBaratos = [...productosNike] 
    productosMasBaratos.sort((a,b) => a.precio - b.precio)
    cargarProductos(productosMasBaratos)
    window.scrollTo({ top: 0})
    tituloProductos.innerText = "Mas baratos";

})

// LIMPIAR FILTROS
const limpiarFiltros = document.querySelector("#limpiarFiltros");

limpiarFiltros.addEventListener("click", () => {

    btnFiltros.forEach(btn => {
        btn.classList.remove("active")
    })

    cargarProductos(productosNike)
    tituloProductos.innerText = "Todos los productos";

    window.scrollTo({ top: 0 })

    filtros.classList.remove("active")
    document.body.classList.remove("modalAbierto")

})