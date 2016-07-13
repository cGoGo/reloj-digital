$(document).ready(function(){
	var reloj = setInterval(function(){ //funcion para tomar hora local 
		var horaLocal = new Date();       //y agregarla al html
		var hora = horaLocal.getHours();
		var minuto = horaLocal.getMinutes();
		var segundo = horaLocal.getSeconds();
		$("#horas").html("");
		$("#minutos").html("");
		$("#segundos").html("");
		$("#horas").append(hora);
		$("#minutos").append(minuto);
		$("#segundos").append(segundo);
	},1000);

/*agregando hora ciudades
	var contenedor = document.getElementById("contenedorCiudades");

	$("#mad").on('change', function (event) {
		horaLocal = new Date(+6);
		var horaMad = horaLocal.getHours() + ":" + horaLocal.getMinutes();
		$("#contenedorCiudades").append(horaLocal);
	});
});*/
