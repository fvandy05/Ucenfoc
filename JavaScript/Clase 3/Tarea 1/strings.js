/*

STRINGS

1- Escriba una funcion que imprima en consola "Hola Mundo".
2- Escriba una funcion reciba una variable y diga si la variable es string o no.
3- Escriba una funcion que revise si es un string vacio o no("")
4- Escriba un string con nombre y apellido juntos y lo separe en un arreglo de strings.  *    con el nombre de primero y el apellido de segundo. str.split(' ') 'Luis Cascante' => ['Luis', 'Cascante']
5- Escriba una función que extraiga solo los primeros n caracteres de un string. str.slice(0, n)
6- Escriba una función que reciba nombre y apellido(en un string juntos) y devuelva las iniciales.*    str.split 'Luis Cascante' => 'L.C'
7- Escriba una función que ponga la primera letra en mayúscula. 'luis' => 'Luis'

*/

/* 1- Escriba una funcion que imprima en consola "Hola Mundo".*/

function imprimir() {
    let saludo = "Hola Mundo";
    console.log(saludo)
    return saludo;
    
}

imprimir()

/* 2- Escriba una funcion reciba una variable y diga si la variable es string o no*/

function verTipo(variable) {
    if (typeof variable === "string") {
        return true;
        
    } else {
        return false;
    }

}

let variable = verTipo("Hola")
console.log(variable)




/* 3- Escriba una funcion que revise si es un string vacio o no("")*/

function stringVacio(string) {
    if (string === "") {
        return true
        
    }/* else {
        return false
    }*/

    return string === "" ? true: false;
    
}

/*4- Escriba un string con nombre y apellido juntos y lo separe en un arreglo de strings.  *    con el nombre de primero y el apellido de segundo. str.split(' ') 'Luis Cascante' => ['Luis', 'Cascante']*/

function separaString(string) {
    return string.split(" ")
    
}

const string = separaString ("Luis Cascante");
console.log(string)

/* 5- Escriba una función que extraiga solo los primeros n caracteres de un string. str.slice(0, n)*/

function extraerCaracteres(nombrecito, numeroCaractes) {
    
    return nombrecito.slice(0, numeroCaractes) 
}

console.log(extraerCaracteres("Whanderley", 3))

/* 6- Escriba una función que reciba nombre y apellido(en un string juntos) y devuelva las iniciales.*    str.split 'Luis Cascante' => 'L.C' */

function extraerIniciales(NombreCompleto) {

    const nombreSeparado = NombreCompleto.split(" ")
    let iniciales = nombreSeparado[0].slice(0, 1)
    iniciales += (".")
    iniciales += nombreSeparado[1].slice(0,1)
    return iniciales;
    
}

console.log(extraerIniciales("Whanderley Fonseca"))


/*7- Escriba una función que ponga la primera letra en mayúscula. 'luis' => 'Luis'*/

function insertarMayuscula(nombre) {

    let primeraLetra = nombre.slice(0,1)
    let mayúscula = primeraLetra.toUpperCase()
    mayúscula += nombre.slice(1,nombre.lenght)

    return mayúscula
}

console.log(insertarMayuscula("Luis"))
