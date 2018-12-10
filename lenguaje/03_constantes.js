// Constantes en ES6

let x = 25
const z = 1.26

let y = x

x = x * x
// z = z * z da un error

console.log(x) // esto dara 625
console.log(y) // esto dara 25

const oPersona = { nombre: 'Pepe', age: 23 }
oPersona.nombre = 'Jose'
oPersona.altura = 180
console.log(oPersona)

const oAmigo = oPersona
oAmigo.nombre = "Alfonso"

{
    const oOtroAmigo = oPersona
    oOtroAmigo.nombre = 'Carlos'
    console.log(oOtroAmigo)
}

// Clonado de un objeto
const otroDiferente = Object.assign({}, oPersona)
otroDiferente.nombre = 'Maria'

console.log(otroDiferente)
console.log(oAmigo)
console.log(oPersona)
