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


let botontres = document.querySelector('#cambiarColorazul')
let imagentres= document.querySelector('#iphone14')

let imagenCambiadatres = false;

botontres.onclick = function () {
    if (imagenCambiadatres == false) {
        imagentres.src = 'Imagenes/iPhone 14.png'
        imagenCambiadatres = true
    }else{ 
        imagentres.src = 'Imagenes/iphones14.png'
        imagenCambiadatres = false

    } 

}

let botoncuatro = document.querySelector('#cambiarColorrosa')
let imagencuatro = document.querySelector('#iphone13')

let imagenCambiadacuatro = false;

botoncuatro.onclick = function () {
    if (imagenCambiadacuatro == false) {
        imagencuatro.src = 'Imagenes/iPhone 13,,.png'
        imagenCambiadacuatro = true
    }else{ 
        imagencuatro.src = 'Imagenes/iphones14.png'
        imagenCambiadacuatro = false

    } 

}