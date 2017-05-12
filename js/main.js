$(document).ready(function() {
    $('select').material_select();
 });
       
 
function datosCliente(nombre,apellido,email,direccion, telefono){
	this.nombre=nombre;
	this.apellido=apellido;
	this.email=email;
	this.direccion=direccion;
	this.telefono=telefono;
}
function mostrarData(){
var nombre= document.getElementById("Nombre").value
var apellido= document.getElementById("Apellido").value
var email= document.getElementById("Email").value
var direccion= document.getElementById("Direccion").value
var telefono= document.getElementById("Telefono").value	
var cliente= new datosCliente(nombre, apellido, email, direccion, telefono);
var compras= [];
compras.push(cliente);

compras.forEach(function (elements){
var mostrar = document.getElementById("clientes")
mostrar.innerHTML+= elements.nombre + elements.apellido + elements.email + elements.direccion + elements.telefono
});
}
