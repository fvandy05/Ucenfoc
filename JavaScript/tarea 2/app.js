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
  11. 

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