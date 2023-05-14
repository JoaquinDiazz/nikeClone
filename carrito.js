// const productosEnCarritoLS  = JSON.parse(localStorage.getItem("productoEnCarritoLS"));
// const carritoVacio = document.querySelector("#carritoVacio");
// const compra = document.querySelector("#compra");
// const precioTotal = document.querySelector("#precioTotal");

// if (productosEnCarritoLS) {

//     carritoVacio.classList.add("disabled");
//     compra.classList.remove("disabled");
//     precioTotal.classList.remove("disabled");

//     productosEnCarritoLS.forEach( producto => {

//         const div = document.createElement("div");
//         div.classList.add("producto");
//         div.innerHTML = `
//             <img src="${producto.imagen}" alt="">
//             <div class="detalles">
//                 <p>${producto.nombre}</p>
//                 <p>${producto.descripcion}</p>
//                 <div class="cantidadProducto">
//                     <i class="bi bi-plus-lg"></i>
//                     <span>${producto.cantidad}</span>
//                     <i class="bi bi-dash-lg"></i>
//                 </div>
//             </div>
//             <div class="eliminar">
//                 <i class="bi bi-trash btnEliminar" id="${producto.id}"></i>
//                 <p>${producto.precio * producto.cantidad}</p>
//             </div>
//         `
//         compra.append(div)
//     })

// } else {
//     carritoVacio.classList.remove("disabled");
//     compra.classList.add("disabled");
//     precioTotal.classList.add("disabled");
// }