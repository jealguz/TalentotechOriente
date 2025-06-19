//////////// Codigo para el carrusel de imagenes automatico
const imagesaut = document.querySelectorAll('.carouselaut img');
const puntosaut = document.querySelectorAll('.puntoaut');



//////////// Codigo para el carrusel de imagenes de cada uno de los pueblos
const imagesbar = document.querySelectorAll('.carouselbarichara img');
const imagessan = document.querySelectorAll('.carouselsangil img');
const imagesvel = document.querySelectorAll('.carouselvelez img');
const imagesgua = document.querySelectorAll('.carouselgua img');
const imagescha = document.querySelectorAll('.carouselcharala img');
const prevBtnbar = document.getElementById('prevBtnBar');
const nextBtnbar = document.getElementById('nextBtnBar');
const prevBtnsan = document.getElementById('prevBtnSan');
const nextBtnsan = document.getElementById('nextBtnSan');
const prevBtnvel = document.getElementById('prevBtnVel');
const nextBtnvel = document.getElementById('nextBtnVel');
const prevBtngua = document.getElementById('prevBtnGua');
const nextBtngua = document.getElementById('nextBtnGua');
const prevBtncha = document.getElementById('prevBtnCha');
const nextBtncha = document.getElementById('nextBtnCha');

let currentIndex = 0;  //Se puede colocar cualquier nombre al Let
let currentOut = 0;



//////////// Codigo para el carrusel de imagenes automatico pueblos
function cambiarImagen() {
    //Elimina la clase active de la imagen actual
    imagesaut[currentOut].classList.remove('active');
    puntosaut[currentOut].classList.remove('active');
    
    //Cambia a la siguiente imagen
    currentOut = (currentOut + 1) % imagesaut.length;
    
    //Agrega la clase active a la nueva imagen
    imagesaut [currentOut].classList.add('active');
    puntosaut [currentOut].classList.add('active');
}

//Empieza el primer cambio de imagen
imagesaut [currentOut].classList.add('active');
puntosaut [currentOut].classList.add('active');

//Cambia la imagen cada 5.5 seg o cada 5500 milisegundos 
setInterval(cambiarImagen, 5500);



//////////// Codigo para el carrusel de imagenes de Barichara
function showImageBar(index) {
    imagesbar.forEach(img => img.classList.remove('active'));
    imagesbar[index].classList.add('active');
}
prevBtnbar.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? imagesbar.length - 1 : currentIndex -1;
    showImageBar(currentIndex);
});
nextBtnbar.addEventListener('click', function() {
    currentIndex = (currentIndex === imagesbar.length - 1) ? 0 : currentIndex +1;
    showImageBar(currentIndex);
});



//////////// Codigo para el carrusel de imagenes de SanGil
function showImageSangil(index) {
    imagessan.forEach(img => img.classList.remove('active'));
    imagessan[index].classList.add('active');
}
prevBtnsan.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? imagessan.length - 1 : currentIndex -1;
    showImageSangil(currentIndex);
});
nextBtnsan.addEventListener('click', function() {
    currentIndex = (currentIndex === imagessan.length - 1) ? 0 : currentIndex +1;
    showImageSangil(currentIndex);
});



//////////// Codigo para el carrusel de imagenes de Velez
function showImageVelez(index) {
    imagesvel.forEach(img => img.classList.remove('active'));
    imagesvel[index].classList.add('active');
}
prevBtnvel.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? imagesvel.length - 1 : currentIndex -1;
    showImageVelez(currentIndex);
});
nextBtnvel.addEventListener('click', function() {
    currentIndex = (currentIndex === imagesvel.length - 1) ? 0 : currentIndex +1;
    showImageVelez(currentIndex);
});



//////////// Codigo para el carrusel de imagenes de Guavata
function showImageGuavata(index) {
    imagesgua.forEach(img => img.classList.remove('active'));
    imagesgua[index].classList.add('active');
}
prevBtngua.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? imagesgua.length - 1 : currentIndex -1;
    showImageGuavata(currentIndex);
});
nextBtngua.addEventListener('click', function() {
    currentIndex = (currentIndex === imagesgua.length - 1) ? 0 : currentIndex +1;
    showImageGuavata(currentIndex);
});



//////////// Codigo para el carrusel de imagenes de Charala
function showImageCha(index) {
    imagescha.forEach(img => img.classList.remove('active'));
    imagescha[index].classList.add('active');
}
prevBtncha.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? imagescha.length - 1 : currentIndex -1;
    showImageCha(currentIndex);
});
nextBtncha.addEventListener('click', function() {
    currentIndex = (currentIndex === imagescha.length - 1) ? 0 : currentIndex +1;
    showImageCha(currentIndex);
});



//////////// Inicializar el carrusel de imagenes de cada pueblo
showImageBar(currentIndex);
showImageSangil(currentIndex);
showImageVelez(currentIndex);
showImageGuavata(currentIndex);