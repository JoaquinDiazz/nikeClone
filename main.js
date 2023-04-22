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
let nav = document.querySelector(".nav");
let botonAbrir = document.querySelector(".open");
let botonCerrar = document.querySelector(".close");

botonAbrir.addEventListener("click", () => {
    nav.classList.add("active")
})
botonCerrar.addEventListener("click", () => {
    nav.classList.remove("active")
})

// CARRUSEL 3 CUOTAS
let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
let parrafos = document.querySelectorAll(".parrafos");

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

