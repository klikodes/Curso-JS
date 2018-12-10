class Persona {
    constructor(nombre, edad, isSocio) {
        this.nombre = nombre
        this.edad = edad
        this.isSocio = isSocio
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
    }
}

class Alumno extends Persona {
    constructor(nombre, edad, isSocio, curso) {
        super(nombre, edad, isSocio)
        this.curso = curso
    }

    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}

const a1 = new Alumno('Marta', 23, true, 'JavaScript')
console.log(a1)
a1.saludar()