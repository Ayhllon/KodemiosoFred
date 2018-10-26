
//guardar_localstorage();
obtener_localstorage();

function obtener_localstorage(){

	if(localStorage.getItem( "nombre")){

let nombre = localStorage.getItem( "nombre");
let contrasena = localStorage.getItem( "contrasena");

console.log(nombre);
console.log(contrasena);

	}else{
		console.log("No hay registros en storage");
	}
}

function guardar_localstorage(){
	var persona = {
		nombre: "Kevin",
		contrasena: "kevin123"
	}
};
let nombre = "Kevin";
let contrasena = "kevin123";

	localStorage.setItem(" nombre ", nombre);
	localStorage.setItem(" contrasena ", contrasena);
