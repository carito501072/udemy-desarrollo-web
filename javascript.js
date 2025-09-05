// Saludo de bienvenida a la pagina
alert("¡Bienvenidos(as) a Clases Online!");

// Selecciona los elementos por su ID
const parrafo = document.getElementById('parrafo');
const boton = document.getElementById('miBoton');

// Añade un "event listener" al botón
boton.addEventListener('click', function() {
    // Cambia el contenido del párrafo
    parrafo.textContent = '¡Gracias por confiar en nodotros(as)!';
});


// Enviar formulario, evita que la pagina vuelva al inicio y no almancena la informacion enviada.
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", actionFormulario);

function actionFormulario(event){
    event.preventDefault();
    alert(('Se contactaran con usted pronto'));
    console.log("Estoy en mi funcion actionFormulario");
    formulario.reset();
}

