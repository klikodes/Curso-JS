const aDatos = []
/* aDatos[0] = 'Pepe'
aDatos[23] = 'Juan' */
aDatos.push('Pepe')
aDatos.push('Juan')
aDatos.push('Elena')
aDatos.push('Ines')
console.log('Hola', aDatos)

for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    console.log('Hola', item)
}

aDatos.forEach( item => console.log('Hola moderno', item) )

const aNumbers  = [5, 7, 4, 6, 9] 

let aCubos = aNumbers.map( item => item*item )

let aCubosPares = aCubos.filter( item => !(item%2))

console.log(aCubos)
console.log(aCubosPares)