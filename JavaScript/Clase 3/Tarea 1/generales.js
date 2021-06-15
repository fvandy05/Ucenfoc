/*
GENERAL

1- Escriba una funcion que reciba un arreglo y una funcion y ejecute la funcion en cada elemento del arreglo.
2- Escriba una funcion que reciba 2 objetos y diga si todos sus atributos y valores son igales o no.
3- Escriba una funcion que reciba n numeros, sume todos y devuelva  el resultado de la suma.
4- 4. Escriba una función que reciba dos arreglos y elimine del primero los elementos que aparecen en el segundo.[1,3,4,5,6,7], [3, 7] => [1, 4, 5, 6]
5- 5. Escriba una función que reciba un arreglo y una función, si la función devuelve true agrega el elemento a un primer arreglo y sino a un segundo arreglo, devuelve los dos.

*/

/*1- Escriba una funcion que reciba un arreglo y una funcion y ejecute la funcion en cada elemento del arreglo.*/

let carros= ['mazda', 'hyundai','nissan']
//     argumentos  carros y mayusculas
function ejecutar(arreglo, funcion) {
    //  repite el elemento => carro[indice] por la cantidad  ['mazda', 'hyundai','nissan']
    arreglo.forEach(element => {
        // llamando la funcioon console log y que imprima, lo que retorna la "funcion" => "mayusculas"
        console.log(funcion(element))
    });
    
}
                // llegan palabras lo que sea pero que sea string
function mayusculas(palabras){
    return palabras.toUpperCase()
}

ejecutar(carros, mayusculas)


/*2- Escriba una funcion que reciba 2 objetos y diga si todos sus atributos y valores son igales o no.*/


let carro = {
    nombre:'Mazda',
    color: 'Negro',
    puertas: 4,
    llantas: 4,
}

let carro2 = {
    nombre:'Nissan',
    color: 'Blanco',
    puertas: 2,
    llantas: 4,
}

function comprobar(objeto1, objeto2) {
    let llavesobjeto1 = Object.keys(objeto1)
    let llavesobjeto2 = Object.keys(objeto2)

    if (llavesobjeto1.length !== llavesobjeto2.length) {
        return false        
    }

    for (llaves of llavesobjeto1) {
        if (objeto1[llaves] !== objeto2[llaves]) {
            return false;
        }
        
    }
    return true;
}

console.log(comprobar(carro, carro2))


/*3- Escriba una funcion que reciba n numeros, sume todos y devuelva  el resultado de la suma.*/

function sumar(...numeros) {
    let resultado = 0
    for (let i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] === "number") {
            resultado += numeros[i]
        }
        
    }
    return resultado
    
}

console.log(sumar(1,2,3,4,5,6))

/*4- Escriba una función que reciba dos arreglos y elimine del primero los elementos que aparecen en el segundo.[1,3,4,5,6,7], [3, 7] => [1, 4, 5, 6]*/

function eliminariguales(arreglo1, arreglo2) {
    for (let i = 0; i < arreglo1.length; i++) {
        for (let j = 0; j < arreglo2.length; j++) {
            if (arreglo1[i] === arreglo2[i]) {
                arreglo1.splice(i,1);
                i--;
               break
            }
            
        }
        
        
    }
    
}

const arregloNum1 = [1, 3, 4, 3, 5, 6, 7];
const arregloNum2 = [3, 7, 3, 4, 5];

eliminariguales(arregloNum1, arregloNum2);

console.log(arregloNum1, arregloNum2);

/*5- Escriba una función que reciba un arreglo y una función, si la función devuelve true agrega el elemento a un primer arreglo y sino a un segundo arreglo, devuelve los dos.*/

const personas = [
    { nombre: "Luis", apellido: "Cascante", edad: 27, genero: "Masculino" },
    { apodo: "Luis", apellido: "Elizondo", edad: 28, genero: "Masculino" },
    { nombre: "Edris", apellido: "Ríos", edad: 22, genero: "Masculino" },
    { nombre: "Mariana", apellido: "García", edad: 19, genero: "Femenino" },
    { nombre: "Betzabet", apellido: "Cháves", edad: 23, genero: "Femenino" },
    { nombre: "Hati", apellido: "Alexandra", edad: 2, genero: "Femenino" },
    { nombre: "Akamaru", apellido: "Josue", edad: 3, genero: "Masculino" },
    { nombre: "Siena", apellido: "María", edad: 1, genero: "Femenino" },
  ];
  
  function esMayorEdad(persona) {
    if (persona.edad >= 18) {
      return true;
    }
  
    return false;
  }
  
  function esFemenino(persona) {
    return persona.genero === "Femenino";
  }
  
  function clasificarArreglo(arreglo, funcion) {
    const pasaron = [];
    const noPasaron = [];
  
    for (elemento of arreglo) {
      const resultado = funcion(elemento);
      if (resultado === true) {
        pasaron.push(elemento);
      } else {
        noPasaron.push(elemento);
      }
    }
  
    console.log("Pasaron", pasaron);
    console.log("No Pasaron", noPasaron);
  }
  
  clasificarArreglo(personas, esMayorEdad);
 clasificarArreglo(personas, esFemenino);