let botonuno = document.querySelector('#cambiarColordorado')
let imagenuno = document.querySelector('#iphone13promax')

let imagenCambiadauno = false;

botonuno.onclick = function () {
    if (imagenCambiadauno == false) {
        imagenuno.src = '/Imagenes/iPhone13ProMaX-removebg-preview (1).png'
        imagenCambiadauno = true
    }else{ 
        imagenuno.src = '/Imagenes/iphones13promax.png'
        imagenCambiadauno = false

    } 

}

let botondos = document.querySelector('#cambiarColorplata')
let imagendos = document.querySelector('#iphone14promax')

let imagenCambiadados = false;

botondos.onclick = function () {
    if (imagenCambiadados == false) {
        imagendos.src = 'Imagenes/iPhone13ProMax...png'
        imagenCambiadados = true
    }else{ 
        imagendos.src = '/Imagenes/iphones13promax.png'
        imagenCambiadados = false

    } 

}


let botontres = document.querySelector('#cambiarColordorado')
let imagentres= document.querySelector('#iphone13promax')

let imagenCambiadatres = false;

botonuno.onclick = function () {
    if (imagenCambiadatres == false) {
        imagenuno.src = '/Imagenes/iPhone13ProMaX-removebg-preview (1).png'
        imagenCambiadatres = true
    }else{ 
        imagentres.src = '/Imagenes/iphones13promax.png'
        imagenCambiadatres = false

    } 

}