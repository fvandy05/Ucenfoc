/**
 * Práctica de Arreglos
 *
 * 1. Escriba una función que reciba un contador, y un valor y cree un arreglo con la cantidad de valores que dice el contador. llenar(3, 'b') => ['b', 'b', 'b']
 * 2.Escriba una función que le dé vuelta a un arreglo. [1, 2, 3] => [3, 2, 1]
 * 3. Escriba una función que reciba dos arreglos y diga si son iguales  o no. [1, 2], [1, 2] = true
 * [2, 1], [1, 2] = false
 * 4. Escriba una función que reciba un arreglo de pares llave/valor y devuelva un objeto.
 *  [
      ['nombre', 'Luis'], 
      ['apellido', 'Cascante']
    ]
 * 
 * {
      nombre: 'Luis',
      apellido: 'Cascante'
    }
  *5. Escriba una función que reciba un arreglo y devuelva un arreglo sin elementos duplicados, PERO no pueden usar el new Set() de JS. [1, 2, 3, 1, 2] => [1, 2, 3]
  *6. Escriba una función que reciba dos arreglos y devuelva la intersección.
  7. Escriba una función que reciba un variable y diga si es un arreglo.
  8. Escriba una función que reciba un arreglo y lo clone, es decir, devuelva un arreglo igual.
  9. Escriba una función que reciba un arreglo de strings y devuelva todos los strings concatenados.
   10. Escriba una función que reciba un número e inserte un '-' menos entre los números pares y un '*' asterico entre dos números impares. '134245780' => '1*34-2-45*78-0'.
  11. Escriba una función que "revuelva" un arreglo. O sea, que cambie los elementos de posición al azar. Pueden usar Math.random()
  12. Escriba una función que encuentre los valores repetidos de un arreglo.
  13. Escriba una función que encuentre la diferencia de dos arreglos, es decir, devolver los valores que solo están en uno y no en el otro.[1, 2, 3,4 ], [3,4,5, 6] => [1,2, 5, 6]
  14. EXTRA EXTRA: Escriba una función que 'aplane' un arreglo. [[1, 2], 3, 4, 5 ,[6, 7, 8]] = 

 */


  /* 1. Escriba una función que reciba un contador, y un valor y cree un arreglo con la cantidad de valores que dice el contador. llenar(3, 'b') => ['b', 'b', 'b']*/

  function crearArreglo(contador, valor) {
    let resultado = []
    for (let index = 0; index < contador; index++) {
      resultado.push(valor)
      
    }

    return resultado
    
  }

  console.log(crearArreglo(3, 'b'))

  /*2.Escriba una función que le dé vuelta a un arreglo. [1, 2, 3] => [3, 2, 1]*/


  let numeros = [1,2,3] 

  function darVuelta(arreglo) {
    let arreglito = []
    for (let index = arreglo.length; index > 0; index--) {
      arreglito.push(arreglo[index -1]); 
    }
    return arreglito
  }

  console.log(darVuelta(numeros))


  /*3. Escriba una función que reciba dos arreglos y diga si son iguales  o no. [1, 2], [1, 2] = true
 * [2, 1], [1, 2] = false*/

let arregloAfuera1 =[1,2]
let arregloAfuera2 =[2,3]

function comprobarArreglo(arregloAdrentro1, arregloAdrentro2) {
  let comprobar = true
  arregloAdrentro1.forEach(element => {
    if (arregloAdrentro1[element] != arregloAdrentro2[element]) {
      comprobar = false
    }
    }
    
  );
  return comprobar
}

console.log(comprobarArreglo(arregloAfuera1, arregloAfuera2))

// * 4. Escriba una función que reciba un arreglo de pares llave/valor y devuelva un objeto.
// *  [
//      ['nombre', 'Luis'], 
//      ['apellido', 'Cascante']
//    ]
// * 
// * {
//      nombre: 'Luis',
//      apellido: 'Cascante'
//    }

let persona = [
     ['nombre', 'Luis'], 
     ['apellido', 'Cascante'],
    ]

const devolverObjeto = (arreglo) => {
  let reversa ={}
  for (let i = 0; i < arreglo.length; i++) {
            reversa[(arreglo[i][0])] = arreglo[i][1];
    
  }
  return reversa;
}

console.log(devolverObjeto(persona))

// function agregarAtributo(objeto, llantas, valor) {
//   objeto[llantas] = valor;  
// }

// agregarAtributo(carro1, "llantas", 4)
// console.log(carro1)

// *5. Escriba una función que reciba un arreglo y devuelva un arreglo sin elementos duplicados, PERO no pueden usar el new Set() de JS. [1, 2, 3, 1, 2] => [1, 2, 3]

let duplicados = [1, 2, 3, 1, 2]

function borrar(duplicados){
const eliminarDuplicados = [];
duplicados.forEach(element => {
  if (!eliminarDuplicados.includes(element)) {
    eliminarDuplicados.push(element)
  }
  
});

  return eliminarDuplicados
}

console.log(borrar(duplicados))

// *6. Escriba una función que reciba dos arreglos y devuelva la intersección.

let a = [1,5,3,4]
let b = [1,4]

function intersecion(arreglo1, arreglo2) {
  let resultado =[]
  for (let i = 0; i < arreglo1.length; i++) {
    if (arreglo2.indexOf(arreglo1[i]) !== -1) {
      resultado.push(arreglo1[i])
    }
    
  }
  return resultado
}

console.log(intersecion(a, b))

// 7. Escriba una función que reciba un variable y diga si es un arreglo.

let tipo = 1

function validarArreglo(variable) {
  
  return Array.isArray(variable)
  
}

console.log(validarArreglo(a))

// 8. Escriba una función que reciba un arreglo y lo clone, es decir, devuelva un arreglo igual.

function clonarArreglo(arreglo){
  let arregloClonado = arreglo.slice()
  return arregloClonado

}

console.log(a)
console.log(clonarArreglo(a))

// 9. Escriba una función que reciba un arreglo de strings y devuelva todos los strings concatenados.

let cosas= ['Hola', 'Mundo', 'me', 'gusta', 'One' ,'Piece']

function Concatenar(string) {
  return string.join(" ")
  
}

console.log(Concatenar(cosas))


// 10. Escriba una función que reciba un número e inserte un '-' menos entre los números pares y un '*' asterico entre dos números impares. '134245780' => '1*34-2-45*78-0'.

let numeritos = '134245780';

function parImpar(numero) {
  let procesado = '';
  let convertirArreglo = numero.split('');

  for (i = 0; i < convertirArreglo.length; i++) {

    if((convertirArreglo[i] % 2 === 0) && (convertirArreglo[i + 1] % 2 === 0) ){

      procesado += convertirArreglo[i] + "-"

    } else if(!(convertirArreglo[i] % 2 === 0) && !(convertirArreglo[i + 1] % 2 === 0)){

      procesado += convertirArreglo[i] + "*"

    } else{
      
      procesado += convertirArreglo[i]
    }
  }
  return procesado;
  
}

console.log(parImpar(numeritos))


// 11. Escriba una función que "revuelva" un arreglo. O sea, que cambie los elementos de posición al azar. Pueden usar Math.random()

function mezclarArreglo(arreglo) {
  for (let i = arreglo.length - 1; i > 0; i--) {
    let indiceAleatorio = Math.floor(Math.random() * (i + 1));
    let temporal = arreglo[i];
    arreglo[i] = arreglo[indiceAleatorio];
    arreglo[indiceAleatorio] = temporal;
    
  }

  return arreglo
  
}

console.log(mezclarArreglo(a))



// 12. Escriba una función que encuentre los valores repetidos de un arreglo.

let repetidos = [1, 2, 3, 4, 1, 2, 3]

function encontrarValores(arreglo) {
  let repetido = [];
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo.length; j++) {
      if (arreglo[i] === arreglo[j] && i != j){
        repetido.push(arreglo[i]);


      }
      
    }
    
  }
  repetido = borrar(repetido)
  return repetido
  
}

console.log(encontrarValores(repetidos))

// 13. Escriba una función que encuentre la diferencia de dos arreglos, es decir, devolver los valores que solo están en uno y no en el otro.[1, 2, 3,4 ], [3,4,5, 6] => [1,2, 5, 6]

let eje1 = [1, 2, 3, 4 ];
let eje2 = [3,4,5, 6];

function diferenciaArray(arreglo1, arreglo2){
  let diferente = [];

    arreglo1.forEach(elemento1 => {

        if (!arreglo2.includes(elemento1)) {
            diferente.push(elemento1)
        }
    });
    arreglo2.forEach(elemento2 => {

        if (!arreglo1.includes(elemento2)) {
            diferente.push(elemento2)
        }
    });

    return borrar(diferente)
}

console.log(diferenciaArray(eje1, eje2));

// 14. EXTRA EXTRA: Escriba una función que 'aplane' un arreglo. [[1, 2], 3, 4, 5 ,[6, 7, 8]]

let noPlano = [[1, 2], 3, 4, 5 ,[6, 7, 8]]

function aplarnarArreglo(arreglo) {
  let plano = [].concat.apply([], arreglo);
  return plano
}

console.log(aplarnarArreglo(noPlano))