
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





var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}