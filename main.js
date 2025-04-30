
// let nombre = prompt("Ingrese su nombre");

// switch(nombre){
//     case "fran":
//     document.write("el nombre es correcto");
//     break;

// case "jose":
//     document.write("el nombre es incorrecto");
//     break;

//     case "juan":
//         document.write("Este nombre tambien es incorrecto");
//         break;

// default:
//     document.write("No es ninguno de los 2 nombres inocrrectos");

// }

// let button  = document.getElementById("circulo")
// let defaultColor = button.style.backgroundColor
// let colors = ["blue", "green", "purple"]
// let count = 0;

// button.onmouseenter = function (e) {
//     e.target.style.backgroundColor = colors[count % colors.length];
//     count++;
// }

// button.onmouseleave = function (e) {
//     e.target.style.backgroundColor = defaultColor;
// }



// let numero1 = 50;
// let numero2 = 100;
// let numero3 = 150;

// function sumar(num1, num2) {
//     let resultadoSuma = num1 + num2;

//     console.log(`El resultado de la suma es de: ${resultadoSuma}`)

//     return resultadoSuma;
// }

// sumar(5, 5)




// function incrementoEdad(num1, num2) {
//     let incrementoEdades = num1 * num2;
//     console.log(`Su edad aumentada es de : ${incrementoEdades}`)

//     return incrementoEdades
// }

// incrementoEdad(numero3, 2)
// incrementoEdad(numero1, 5)


// // Decremento de edad con funcion

// function edadReducida(num1) {
//     let nuevo = incrementoEdad(numero3, 2) - num1;
//     console.log(`La nueva edad es de: ${nuevo}`);
//     return nuevo;


// }

// edadReducida(50);



//Bucle for

// for (let i = 1; i <= 10; i +=2) {
//     console.log(`El valor del numero en la vuelva N° ${i} es ${i}`)
// }

// function contador(){
//     for (let i =1; i<= 10; i++){
//         console.log(`El valor del numero en la vuelva N° ${i} es ${i}`)
//     }


// }

// contador();

// for (let i = 1; i <= 4; i++){

//     let ingresarNombre= prompt("Ingrese su nombre:")
//     document.write(`Turno N° ${i} Nombre: ${ingresarNombre}</br>`);
// }



// let ingresoDatos =  prompt("ingrese un numero:");

// if ( ingresoDatos == ingresoDatos){
//     for (let i=0; i <= ingresoDatos; i ++ ){
//         console.log(`El numero ingresado es ${ingresoDatos} y su ciclo es ${i}`);
//     }
// }

// let ingresoDatos = prompt("Ingrese un numero:");

// if (ingresoDatos == ingresoDatos) {
//     for (let i = 0; i < ingresoDatos; i += 2) {
//         console.log(`Los numeros pares por debajo de ${ingresoDatos} son ${i}`);
//     }
// }




// Tabla Multiplicar * 10

// let numero = prompt("ingrese un numero:");

// if (numero == numero) {
//     for (let i = 1; i <= 10; i++){
//         let multiplicacion  = numero * i;
//         console.log(`${numero} x ${i} = ${multiplicacion}`)
//     }

// }

// Funcion para multiplicar segun numero ingresado




// function multiplicar(multi) {

//     let num = parseInt(prompt ("Ingrese un numero"));

//     for (let i = 1; i <= 10; i++) {
//         let multi = num * i;
//         console.log(`${num} x ${i} = ${multi}`);


//     }
//     return multi;
// }
// multiplicar();



// let letra = prompt("Introduce una letra:");
// let numero = parseInt(prompt("Introduce un número:"));


// let cadena = "";

// for ( let i = 1 ; i<= numero; i++){
//     cadena += letra;
// }

// console.log(`${cadena}`);


// Calculo de media Aritmetica

// let num = prompt("ingrese un numero");


// while( num < 0 || num>5 ){

//     console.log (`El numero ingresado es ${num}`)


//     num = prompt("Volver a ingresar un numero");
// }


// while(num == 0){
//     console.log (`Por favor teclee un numero entre el 1 y el 5`)

//     num = prompt("Volve a intentar, no tienen que ser 0");

// }


// let contraseña = prompt("Escriba su contraseña");
// let intentos = 3;





// while (intentos <= 3 && intentos > 1 && contraseña !== "fran") {
//     console.log(" Contraseña incorrecta, vuelva a intentar")
//     intentos--;

//     contraseña = prompt(`Ingrese nuevamente, le quedan ${intentos} intentos`);

// }

// if (contraseña == "fran") {
//     console.log("Bienvenido Fran");






// }



// else {
//     console.log(" usted no puede pasar");
// }





// let letraMayus = prompt("Ingresa una letra en Mayuscula");


// do{
//     console.log(`La letra ingresada es ${letraMayus}`);

//     letraMayus = prompt("ingrese nuevamente");

// } 
// while(letraMayus !== "B"){
//     console.log(`Letra ingresada ${letraMayus}`);

// }



// let boton1 = document.querySelector("#button");

// let saludar = () => alert("Hola hola");
// boton1.addEventListener ("click",saludar);


// MODO OSCURO

// let boton1 = document.querySelector("#btn1");
// let boton2 =document.querySelector("#btn2");

// boton1.addEventListener("click", function fondoAmarillo (){
//     document.body.style.backgroundColor = "yellow";
// })


// function nose(){
//     devicePixelRatio
// }


const productos = {
    camiseta: { nombre: 'Camiseta', precio: 20, cantidad: 0 },
    pantalon: { nombre: 'Pantalón', precio: 40, cantidad: 0 },
    zapatos:  { nombre: 'Zapatos', precio: 60, cantidad: 0 },
    gorra:    { nombre: 'Gorra', precio: 15, cantidad: 0 }
  };

  function cambiarCantidad(productoId, cambio) {
    const producto = productos[productoId];
    producto.cantidad = Math.max(0, producto.cantidad + cambio);
    document.getElementById(`cantidad-${productoId}`).textContent = producto.cantidad;
    actualizarCarrito();
  }

  function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const totalUnidadesElem = document.getElementById('total-unidades');
    const totalPrecioElem = document.getElementById('total-precio');

    lista.innerHTML = '';
    let totalUnidades = 0;
    let totalPrecio = 0;

    for (const id in productos) {
      const prod = productos[id];
      if (prod.cantidad > 0) {
        const li = document.createElement('li');
        li.textContent = `${prod.nombre} x${prod.cantidad} - $${(prod.precio * prod.cantidad).toFixed(2)}`;
        lista.appendChild(li);

        totalUnidades += prod.cantidad;
        totalPrecio += prod.precio * prod.cantidad;
      }
    }

    totalUnidadesElem.textContent = totalUnidades;
    totalPrecioElem.textContent = totalPrecio.toFixed(2);
  }





  document.getElementById('finalizar-compra').addEventListener('click', () => {
    // Verificamos si hay productos en el carrito
    let hayProductos = false;
    for (const id in productos) {
      if (productos[id].cantidad > 0) {
        hayProductos = true;
        break;
      }
    }

    if (!hayProductos) {
      alert("Tu carrito está vacío.");
      return;
    }

    // Simulación de redirección a un link de pago ya generado
    // (Este link lo deberías generar desde tu servidor con Mercado Pago SDK)
    const linkPago = "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=TU_ID_DE_PREFERENCIA";

    window.open(linkPago, "_blank"); // o window.location.href = linkPago;
  });