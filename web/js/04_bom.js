function saludar() {
    let nombre = prompt('Como te llamas')
    // window.alert('Hola a todos')
    alert(`Hola ${nombre}`)
}

function despedir () {
    setTimeout( () => {
        alert('Adios')
        //location.href
        location.assign('https://www.google.com')
    }, 2000)

}