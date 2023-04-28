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
const nav = document.querySelector(".nav");
const botonAbrir = document.querySelector(".open");
const botonCerrar = document.querySelector(".close");

botonAbrir.addEventListener("click", () => {
    nav.classList.add("active")
})
botonCerrar.addEventListener("click", () => {
    nav.classList.remove("active")
})

// MODAL CARRITO
const open = document.querySelector("#openCarrito")
const close = document.querySelector("#closeCarrito")
const modal = document.querySelector(".carrito")

open.addEventListener("click", () => {
    modal.classList.add("active")
})

close.addEventListener("click", () => {
    modal.classList.remove("active")
})

// CARRUSEL 3 CUOTAS
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const parrafos = document.querySelectorAll(".parrafos");

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

let accion = parseInt(prompt("Bienvenidos a Nike.ar. Que desea realizar? \n1. Mostrar stock \n2.Filtrar por mas caras  \n3.Filtrar por mas baratas \n4.Filtrar por color negro \n5.Filtrar por color blanco"))


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

switch (accion) {
    case 1:
        mostrarProductos()
        break;
    case 2:
        caras()
        break;
    case 3:
        baratas()
        break;
    case 4:
        colorNegro()
        break;
    case 5:
        colorBlanco() 
        break;
    default:
        alert("Valor invalido")        
}

