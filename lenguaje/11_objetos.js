let oPersona = {
    nombre: 'Pepe',
    edad: 22,
    isSocio: true,
    direccion : {
        calle: 'c/ Pez',
        codigo: '28001'
    },
    saludar: function () {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
    },
    saludarA : () => {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
    }

}

let propiedad = 'nombre'

console.log(oPersona[propiedad])

oPersona.saludar()
oPersona.saludarA()

const saludarDesdeFuera = oPersona.saludar

saludarDesdeFuera()