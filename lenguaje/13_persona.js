
// Notación literal o JSON

/* const oPersona1 = {
    nombre: 'Pepe',
    edad: 22,
    isSocio: true,
    saludar: function () {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
    }
}

console.log(oPersona1) */

// Funciones constructoras

function Persona (nombre, edad, isSocio) {
    this.nombre = nombre
    this.edad = edad
    this.isSocio = isSocio
}

Persona.prototype.saludar = function () {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
    }

const p1 = new Persona('Pepe', 42, true)
p1.altura = 180
const p2 = new Persona('Maria', 36, false)

p1.saludar()
p2.saludar()

console.log(p1)
console.log(p2)