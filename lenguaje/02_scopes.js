// Ambitos en JS

var x = 25

function algo() { 
    if (true) {
        var x = 3
    }
    console.log('Soy una funcion', x)
}

algo()
console.log('Desde fuera', x)

// Ambitos en ES6

// let y = 25

function algoES6() {
    if (true) {
        let y = 3
    }
    console.log('Soy una funcion', y)
}

algoES6()
console.log('Desde fuera', y)

