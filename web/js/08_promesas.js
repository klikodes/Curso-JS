function async() {
    return new Promise( (resolve, reject) => {
        setTimeout (() => {
            let n = parseInt(Math.random()*10)
            if (n < 7) {
                resolve(n) //ok
            } else {
                reject(n) // error
            }
        }, 2000)
    })
}

async().then(
    (response) => { console.log('ok', response)}  
).catch(
    (error) => { console.log('error', error)}
)