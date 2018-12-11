import { saludar } from './saludar.js'
import { despedir } from './despedir.js'

function app () {

    let btnSaludar = document.querySelector('#btnSaludar')
    let btnIrse = document.querySelector('#btnIrse')
    /* let btnEnviarC = document.querySelector('#btnEnviarC')
    let btnEnviarA = document.querySelector('#btnEnviarA') */
    let aBtnEnviar = document.querySelectorAll('.enviar')

    btnSaludar.addEventListener('click',saludar)
    btnIrse.addEventListener('click', despedir)
    /* btnEnviarC.addEventListener('click', enviar)
    btnEnviarA.addEventListener('click', enviar) */
    aBtnEnviar.forEach(item => item.addEventListener('click', enviar))

    function enviar (oEv) {
        switch (oEv.target.id) {
            case 'btnEnviarC':
                console.log('Enviado a Central')
                break;
            case 'btnEnviarA':
                console.log('Enviado a Sede A')
                break;
        }
    }
}



document.addEventListener('DOMContentLoaded', app)