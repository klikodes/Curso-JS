// En ES6 aparecen las arrorw functions

/* const suma = function (a, b) {
    return a + b
} */

/* const suma = (a, b) => {
    return a + b
} */

const suma = (a, b) =>  a + b

// Callbacks con arrow functions

function calcular(a = 0, b = 0, callback) {
    console.log(callback(a, b))
}

calcular(10, 3, (x, y) => x + y)
calcular(5, null, x => x*x )

