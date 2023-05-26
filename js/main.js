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
const seguirComprando = document.querySelector("#seguirComprando")

open.addEventListener("click", () => {
    modal.classList.add("active")
    document.body.classList.add("modalAbierto")
})

close.addEventListener("click", () => {
    modal.classList.remove("active")
    document.body.classList.remove("modalAbierto")
})

seguirComprando.addEventListener("click", () => {
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

let carrito = [];
document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carritoLS")) || []    
    cargarCarrito()
})

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
                    <p class="nombre">${prod.nombre}</p>
                    <p>${prod.descripcion}</p>
                    <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
                </div>
                <div class="eliminar">
                    <i class="bi bi-trash btnEliminar" id="${prod.id}"></i>
                    <p class="precioProducto">${prod.precio}</p>
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
    total.innerText = `$${carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad , 0)}`
}
cargarCarrito()

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
    Toastify({

        text: "Gracias por su compra",
        duration: 3000,
        close: "false",
        position:"center",
        gravity:"top",
        style: {
            background: "black",
          }

        }).showToast();

    setTimeout(() => {
        modal.classList.remove("active")
        document.body.classList.remove("modalAbierto")
    }, 2000);
})