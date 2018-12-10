let texto1 = "Comillas dobles" // mala practica
let texto2 = 'Comillas simples'

console.log(texto1, texto2)

// Valores escapados

let texto3 = 'Comillas \'simples\''

console.log(texto3)

// Template strings en ES6

let nombre = 'Pepe'
let texto4 = `
    Texto en varias
    líneas para ${nombre}`

console.log(texto4)