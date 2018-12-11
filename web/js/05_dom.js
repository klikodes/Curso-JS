function app () {
    console.log('DOM renderizado')

    let nodoH1 = document.querySelector('h1')
    console.dir(nodoH1)
    nodoH1.innerHTML = 'He borrado el título'
    setInterval(() => {
        nodoH1.classList.toggle('titulo')
        nodoH1.classList.toggle('titulo_inverso')
    },2000)
    //nodoH1.classList.remove('titulo')
    //nodoH1.classList.add('titulo_inverso')

   /*  let aNodosP = document.querySelectorAll('p')
    console.dir(aNodosP)
    aNodosP.forEach( item => item.innerHTML = 'Soy nuevo') */

    let nodoP3 = document.querySelector('#p3')
    nodoP3.innerHTML = 'Soy nuevo'

    document.querySelector('#p4').outerHTML= '<blockquote id="p4">Un anillo para gobernarlos a todos</blockquote>'
}

document.addEventListener('DOMContentLoaded', app)