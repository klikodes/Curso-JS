function app () {
    const formCursos = document.querySelector('#formCursos')
    formCursos.addEventListener('submit', onEnviar)
    let oData = {}
    document.querySelector('#curso').addEventListener('change', definirTurnos)

    function onEnviar(oEv) {
        oEv.preventDefault()
        oData.nombre = document.querySelector('#nombre').value
        oData.email = document.querySelector('#email').value
        oData.passw = document.querySelector('#passw').value
        oData.coments = document.querySelector('#coments').value
        oData.isOk = document.querySelector('#isOk').checked
        oData.curso = seleccionarSelect(document.querySelector('#curso'))
        oData.turno = seleccionaRadio(document.querySelectorAll('[name="turno"]'))
        console.log(oData)
    }

    function seleccionarSelect(nodo) {
        let index = nodo.selectedIndex
        return nodo[index].value
    }

    function seleccionaRadio(aNodos) {
        for (let i = 0; i < aNodos.length; i++) {
            const item = aNodos[i];
            if (item.checked) {
                return item.value
            } 
        }
    }

    function definirTurnos() {
        let nodoNoche = document.querySelector('#turnoNoche')
        let curso = seleccionarSelect(document.querySelector('#curso'))
        if (curso == 'JS') {
            nodoNoche.classList.add('hide')
        } else {
            nodoNoche.classList.remove('hide')
        }

    }
}

document.addEventListener('DOMContentLoaded', app)