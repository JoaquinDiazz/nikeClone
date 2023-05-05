// let grande = document.querySelector(".grande");
// let punto  = document.querySelectorAll(".punto");

// punto.forEach( (cadaPunto , i) => {
//     punto[i].addEventListener("click", () => {

//         let posicion = i
//         let operacion = posicion * -50 

//         grande.style.transform = `translateX(${operacion}%)`;

//         punto.forEach( (cadaPunto , i) => {
//             punto[i].classList.remove("active")
//         })
//         punto[i].classList.add("active")
//     })
// })
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

// PRE ENTREGA 2

const Productos = [

    {
        nombre: "Nike SB Bruin React",
        color: "Negro",
        precio: 49000,
    },

    {
        nombre: "Nike Court Legacy Canvas",
        color: "Blanco",
        precio: 30000,
    },

    {
        nombre: "Nike Air Force 1 '07",
        color: "Blanco",
        precio: 53000,
    },

    {
        nombre: "Nike ZoomX Invincible Run Flyknit 2",
        color: "Negro",
        precio: 89000,
    },

    {
        nombre: "Nike Dunk Low Retro Premium",
        color: "Negro",
        precio: 57000,
    }

]

// let accion = parseInt(prompt("Bienvenidos a Nike.ar. Que desea realizar? \n1. Mostrar stock \n2.Filtrar por mas caras  \n3.Filtrar por mas baratas \n4.Filtrar por color negro \n5.Filtrar por color blanco"))


function mostrarProductos(){
    Productos.forEach( prodcuto => {
        console.log(prodcuto.nombre)
        console.log("Precio: " + prodcuto.precio + " pesos.")
    });
}

function caras() {
    Productos.sort((a,b) => b.precio - a.precio);
    console.log(Productos)
}

function baratas() {
    Productos.sort((a,b) => a.precio - b.precio);
    console.log(Productos)
}

function colorNegro() {
    const negro = Productos.filter((producto) => producto.color === "Negro")
    console.log(negro);
}

function colorBlanco() {
    const blanco = Productos.filter((producto) => producto.color === "Blanco")
    console.log(blanco);
}

// switch (accion) {
//     case 1:
//         mostrarProductos()
//         break;
//     case 2:
//         caras()
//         break;
//     case 3:
//         baratas()
//         break;
//     case 4:
//         colorNegro()
//         break;
//     case 5:
//         colorBlanco() 
//         break;
//     default:
//         alert("Valor invalido")        
// }

// MODAL DE FILTROS

const btnAbrirFiltros  = document.querySelector("#btnFiltros");
const filtros          = document.querySelector("#filtros");
const btnCerrarFiltros = document.querySelector("#btnCerrarFiltros");

btnAbrirFiltros.addEventListener("click", () => {
    filtros.classList.add("active")
    document.body.classList.add("modalAbierto")
})

btnCerrarFiltros.addEventListener("click", () => {
    filtros.classList.remove("active")
    document.body.classList.remove("modalAbierto")
})

// MODAL ORDENAR POR
const btnOrdenar = document.querySelector("#btnOrdenar")
const modalOrdenar = document.querySelector("#ordenarPor")

btnOrdenar.addEventListener("click", () => {
    modalOrdenar.classList.toggle("active")
})

// ARRAY DE PRODUCTOS
const productosNike = [
    {
        nombre: "Nike Essential",
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
        descripcion: "Zapatillas de Running para Hombre",
        precio: 89000,
        color: "blanca",
        imagen: "../img/pageProductos/nikeInvincible.webp",
        genero: "hombre",
        coleccion: "running",
        tipo: "zapatilla",
    },
    {
        nombre: "Nike Zoom Fly 4",
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
        descripcion: "Remera de Moda para Hombre",
        precio: 16500,
        color: "negro",
        imagen: "../img/pageProductos/nikeSB.webp",
        genero: "hombre",
        coleccion: "moda",
        tipo: "remera",
    },
    {
        nombre: "Nike Dri-FIT Miler",
        descripcion: "Remera de Running para Hombre",
        precio: 16500,
        color: "negro",
        imagen: "../img/pageProductos/nikeDriFitRemera.webp",
        genero: "hombre",
        coleccion: "moda",
        tipo: "remera",
    },
    {
        nombre: "Jordan Flight",
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
        descripcion: "Remera de moda para Mujer",
        precio: 10000,
        color: "rosa",
        imagen: "../img/pageProductos/remeraRosa.webp",
        genero: "mujer",
        coleccion: "moda",
        tipo: "remera",
    },
    {
        nombre: "Nike Heritage",
        descripcion: "Mochila de Moda Unisex",
        precio: 20000,
        color: "azul",
        imagen: "../img/pageProductos/nikeHeritage.webp",
        genero: "unisex",
        coleccion: "moda",
        tipo: "mochila",
    },
    {
        nombre: "Nike SB Classic99",
        descripcion: "Gorra de Moda Unisex",
        precio: 12000,
        color: "negro",
        imagen: "../img/pageProductos/gorraSB.webp",
        genero: "unisex",
        coleccion: "moda",
        tipo: "gorra",
    },
    {
        nombre: "Nike Multiplier",
        descripcion: "Medias de Running Unisex",
        precio: 5500,
        color: "negro",
        imagen: "../img/pageProductos/mediaRunning.webp",
        genero: "unisex",
        coleccion: "moda",
        tipo: "medias",
    },
    {
        nombre: "Nike Everyday",
        descripcion: "Medias de Running Unisex",
        precio: 5500,
        color: "blanca",
        imagen: "../img/pageProductos/mediasBlancas.webp",
        genero: "unisex",
        coleccion: "moda",
        tipo: "medias",
    },
    {
        nombre: "Nike Strike",
        descripcion: "Pelota de Futbol Unisex",
        precio: 18000,
        color: "blanca",
        imagen: "../img/pageProductos/nikeStrike.webp",
        genero: "unisex",
        coleccion: "moda",
        tipo: "pelota",
    },
]

// CARGAR PRODUCTOS
const sectionProductos = document.querySelector("#sectionProductos")

function cargarProductos() {

    productosNike.forEach( producto => {

        const div = document.createElement("div");
        div.classList.add("cardProducto");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}}" class="cardImg">
            <div class="cardBody">
                <p class="nombre">${producto.nombre}</p>
                <p class="descripcion">${producto.descripcion}</p>
                <div>
                    <p class="precio">$${producto.precio}</p>
                    <button class="blackBtn">ADD TO CARD</button>
                </div>
            <div/>
        `
        sectionProductos.append(div);

    })
}

cargarProductos();

// ACORDEON FOOTER

const acordeonHeader = document.querySelector("#acordeonHeader"); 
const acordeonBody = document.querySelector("#acordeonBody");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");

acordeonHeader.addEventListener("click", () => {

    acordeonBody.classList.toggle("active");

})


