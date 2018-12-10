class Persona {
    constructor( nombre, edad, isSocio) {
        this.nombre = nombre
        this.edad = edad
        this.isSocio = isSocio
    }

    saludar () {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
    }
}

const p1 = new Persona('Pepe', 42, true)
p1.altura = 180
const p2 = new Persona('Maria', 36, false)

console.log(p1)
console.log(p2)

p1.saludar()
p2.saludar()