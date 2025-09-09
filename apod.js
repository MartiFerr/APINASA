let contenedor = document.querySelector('.contenedor')

fetch('https://api.nasa.gov/planetary/apod?api_key=014R8sSXippvKxk9B3uTGQmtHgzzrNoA4wbLFj8E')

.then(respuesta => respuesta.json())
.then(datos => {
    console.log(datos)
    //img.src = datos[0].url
    for (let i = 0; i < datos.length; i++) {
        //const element = array[index];
        contenedor.innerHTML += '<h1>'+datos[i].title+'</h1><img src="'+datos[i].url+'" alt"">' 
    }
})
