///////////// Codigo para el carrusel de imagenes automatico
const imagenes = document.querySelectorAll('.carouselprincipal img');
const puntos = document.querySelectorAll('.puntoprincipal');


///////////// Codigo para el registro de contacto
const form = document.getElementById('registroContacto');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const lugar = document.getElementById('lugar');

const errorNombre = document.getElementById('errorNombre');
const errorEmail = document.getElementById('errorEmail');
const errorLugar = document.getElementById('errorLugar');


///////////// Codigo para el carrusel de imagenes automatico desde cero
let currentIndexP = 0; //Se puede colocar cualquier nombre al Let


///////////// Codigo para el carrusel de imagenes automatico pagina principal
function cambiarImagen() {
    //Elimina la clase active de la imagen actual
    imagenes[currentIndexP].classList.remove('active');
    puntos[currentIndexP].classList.remove('active');
    
    //Cambia a la siguiente imagen
    currentIndexP = (currentIndexP + 1) % imagenes.length;
    
    //Agrega la clase active a la nueva imagen
    imagenes [currentIndexP].classList.add('active');
    puntos [currentIndexP].classList.add('active');
}

//Empieza el primer cambio de imagen
imagenes [currentIndexP].classList.add('active');
puntos [currentIndexP].classList.add('active');

//Cambia la imagen cada 4.5 seg o cada 4500 milisegundos 
setInterval(cambiarImagen, 4500);


////////////// Codigo funciones de validación de contacto
function validarNombre() {
    if (nombre.value.trim() === '') {
        errorNombre.textContent = 'El nombre es obligatorio.';
    } else {
        errorNombre.textContent = '';
    }
}

function validarEmail() {
    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email.value)) {
        errorEmail.textContent = 'Ingresa un correo electrónico válido.';
    } else {
        errorEmail.textContent = '';
    }
}

function validarLugar() {
    if (lugar.value.trim() === '') {
        errorLugar.textContent = 'El lugar es obligatorio.';
    } else {
        errorLugar.textContent = '';
    }
}


////////////// Eventos del apartado de contacto
nombre.addEventListener('input', validarNombre);
email.addEventListener('input', validarEmail);
lugar.addEventListener('input', validarLugar);

form.addEventListener('submit', function(event) {
    validarNombre();
    validarEmail();
    validarLugar();

    if (errorNombre.textContent || errorEmail.textContent || errorLugar.textContent) {
        event.preventDefault();
    } else {
        alert('Formulario enviado con éxito.');
    }
});