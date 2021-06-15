/*
OBJETOS
-----------------TODAS RECIBEN EL OBJETO COMO PARAMETRO TAMBIEN----------------------------------
1- Escriba una funcion que imprirma las llaves de los atributos de un objeto.
2- Escriba una funcion que imprima los valores de los atributos de un objeto. 
3- Escriba una funcion que elimine un atributo de un objeto, recibe el nombre del atributo como parametro.
4- Escriba una funcion que devuelva la longitud o cantidad de atributos de un objeto.
5- Escriba una función que agregue un atributo a un objeto, recibe el nombre del atributo y valor.
6- Escriba una funcion que actualice el valor de un atributo en un objeto, recibe el nombre del atributo y valor
7- Escriba una funcion que revise si un objeto tiene un atributo, recibe el nombre del atributo 
*/


/*1- Escriba una funcion que imprirma las llaves de los atributos de un objeto.*/


let carro1 = {
    nombre: "Mazda",
    color : "rojo",
    puertas : 4
}

let carro2 = {
    nombre: "Nissan",
    color : "Verde",
    puertas : 2
}

function agregarNombre(objeto) {

    return (Object.keys(objeto))
    
}

console.log(agregarNombre(carro1))


/* 2- Escriba una funcion que imprima los valores de los atributos de un objeto. */

function mostrarValores(objeto) {

    return (Object.values(objeto))
    
}

console.log(mostrarValores(carro1))


/*3- Escriba una funcion que elimine un atributo de un objeto, recibe el nombre del atributo como parametro.*/

function borrarAtributo(objeto, valorEliminar) {
    delete objeto[valorEliminar];
    return objeto;
    
}

console.log(carro2)
borrarAtributo(carro2, "color");
console.log(carro2)

/*4- Escriba una funcion que devuelva la longitud o cantidad de atributos de un objeto.*/

function calcularLogitud(objeto) {
    return (Object.keys(objeto))
}

console.log(calcularLogitud(carro1).length)

/*5- Escriba una función que agregue un atributo a un objeto, recibe el nombre del atributo y valor.*/

function agregarAtributo(objeto, llantas, valor) {
    objeto[llantas] = valor;  
}

agregarAtributo(carro1, "llantas", 4)
console.log(carro1)

/*6- Escriba una funcion que actualice el valor de un atributo en un objeto, recibe el nombre del atributo y valor*/

function actualizarValor(objeto, llantas, valor) {
    objeto[llantas] = valor;
}

actualizarValor(carro1, "llantas", 4000)
console.log(carro1)

/*7- Escriba una funcion que revise si un objeto tiene un atributo, recibe el nombre del atributo */

function revisarAtributo(objeto, atributo) {

    return objeto.hasOwnProperty(atributo);
    
    
}

console.log(revisarAtributo(carro1, "llantas"))
