let x = '2'

// Falsy : false, 0, undefined, '', null, NaN
// Truly

/* if(x != 0) {
    console.log('Todo ok')
} else {
    console.log('Todo mal')
} */

if (x) {
    console.log('Todo ok')
} else {
    console.log('Todo mal')
}

let y = 0
let mensaje = y ? 'Todo ok' : 'Todo mal'
console.log(mensaje)
