
function app () {
    document.querySelector('#datos')
        .addEventListener('click', pedirDatos)

    function pedirDatos() {
        let url = 'https://jsonplaceholder.typicode.com/users'
        let aDatos = []
        fetch(url)
        .then( (response) => { 
            console.log(response)
            return response.json()}
            )
        .then( (data) => { 
            aDatos = data
            console.log(aData)})
    }
}


document.addEventListener('DOMContentLoaded', app)