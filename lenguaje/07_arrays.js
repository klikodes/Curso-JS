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