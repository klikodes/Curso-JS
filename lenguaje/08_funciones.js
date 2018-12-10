function suma (a, b) {
    return a + b
}

console.log(suma(3))

// En ES6 existen valores por defecto
function sumaES6(a = 0, b = 0) {
    return a + b
}

console.log(sumaES6(3))

console.log(sumaES6(3, 6, 5, 7))

// Asignacion de funciones anonimas

const resta = function (a = 0, b = 0) {return a - b}