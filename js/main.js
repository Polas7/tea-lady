function mostrarData(){
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var mail = document.getElementById("email").value;
	var direccion = document.getElementById("direccion").value;
	var fono = document.getElementById("telefono").value;
	var tecito = document.getElementById("teescogido").value;
	var imprimirDatos = document.getElementById("clientes");


	imprimirDatos.innerHTML = "<br><strong>Nombre: </strong>" + nombre + "<br><strong>Apellido: </strong>" + apellido + 
	"<br><strong>Dirección: </strong>" + direccion + "<br><strong>Correo: </strong>" + mail + "<br><strong>Teléfono: </strong>"
	 + fono + "<br><strong>Té seleccionado: </strong>" + tecito;
}
