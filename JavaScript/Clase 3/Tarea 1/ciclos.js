/*
Ciclos

1-Escribe una funcion que reciba un objeto y devuelva un arreglo de llaves/valor.['Llave', 'Valor']
2-Escribe una funcion que reciba un objeto y cree una copia cambiando las llaves por los valores y los valores por las llaves.
3- Escriba una funcion que reciba un arreglo de objetos y los ordene de mayor a menor por el atributo id.
4- Escriba una funcion que reciba el numero y le de la vuelta.
5- Escriba una funcion que reciba un string  y diga si es palindromo o no.(Se escribe igual al reves)
6- Escriba una funcion que reciba un string y que encuentre la palabra mas grande del string.

*/


/*1-Escribe una funcion que reciba un objeto y devuelva un arreglo de llaves/valor.['Llave', 'Valor']*/

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

function devolverArreglo(objeto) {
    return Object.entries(objeto)
    
}

console.log(devolverArreglo(carro1))

/*2-Escribe una funcion que reciba un objeto y cree una copia cambiando las llaves por los valores y los valores por las llaves.*/

function revertirPropiedades(objeto) {
    const nuevoCarro = {}
    
    let propiedades = Object.keys(objeto);
    let valores = Object.values(objeto);

    for (let index = 0; index < propiedades.length; index++) {
        nuevoCarro[valores[index]] = propiedades[index]
        
    }
    return nuevoCarro;
}

const nuevoCarro = revertirPropiedades(carro2)
console.log(nuevoCarro)




/*3- Escriba una funcion que reciba un arreglo de objetos y los ordene de mayor a menor por el atributo id.*/


const arreglo = [
    {
      nombre: "Luis",
      apellido: "Cascante",
      id: 4,
    },
    {
      nombre: "Luis",
      apellido: "Cascante",
      id: 2,
    },
    {
      nombre: "Luis",
      apellido: "Cascante",
      id: 3,
    },
    {
      nombre: "Luis",
      apellido: "Cascante",
      id: 6,
    },
    {
      nombre: "Luis",
      apellido: "Cascante",
      id: 7,
    },
  ];

    function ordenar( objeto ) {

        auxiliar = 0;
      
            for (i = 1; i < objeto.length; i++) {
              for (j = 0; j < objeto.length - i; j++) {
                  if (objeto[j].id < objeto[j + 1].id) {
                      auxiliar = objeto[j];
                      objeto[j] = objeto[j + 1];
                      objeto[j + 1] = auxiliar;
                  }
              }
          }
      
            console.log(objeto);
      
      
        }
      
        ordenar(arreglo);

/* 4- Escriba una funcion que reciba el numero y le de la vuelta. */

function darVueltaNumero(stringDeNumero) {
    let string = "";
    for (let i = stringDeNumero.length - 1; i >= 0; i--) {
      string += stringDeNumero.charAt(i);
    }
  
    return string;
}
  
  const numeroInverso = darVueltaNumero("32165");
  console.log(numeroInverso);




  /*5- Escriba una funcion que reciba un string  y diga si es palindromo o no.(Se escribe igual al reves)*/

function revisionPalindromo(palabra) {
    let palindromo = true

    for (let index = 0; index < palabra.length; index++) {
        console.log(`${palabra[index]} === ${palabra [(palabra.length - index) -1 ]}`);
        
        if (palabra[index]  != palabra[ (palabra.length - index) -1 ]){
            palindromo = false
        }
    }
    return palindromo;
}

console.log(`la palabra anitalavalatina es palindromo? ${revisionPalindromo("anitalavalatina")}`)


/*6- Escriba una funcion que reciba un string y que encuentre la palabra mas grande del string.*/

let heroes = "Hulk Dr.Strange Capitan.America Thor";
function revisionPalabra(heroes) {
    let arreglo = heroes.split(" ")
    let nombreMasLargo = "";

    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index].length > nombreMasLargo.length) {
            nombreMasLargo = arreglo[index];
        }    
    }
    return nombreMasLargo
}

console.log(revisionPalabra(heroes))
