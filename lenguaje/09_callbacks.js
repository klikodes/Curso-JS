function calcular (a = 0, b = 0, callback) {
    console.log(callback(a,b))
}

calcular(10, 3, function(x, y) {return x + y })

calcular(10, 3, function (x, y) { return x - y })

function producto (x, y) {
    return x * y
}

calcular(10, 3, producto)

// No Callback
// calcular(producto(10, 3))
