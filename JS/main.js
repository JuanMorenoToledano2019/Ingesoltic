
function cisco(){
	document.getElementById("marcas").src="img/marcas1.png";
	setTimeout(function(){dell();},2000);
}

function dell(){
	document.getElementById("marcas").src="img/marcas2.png";
	setTimeout(function(){emc();},2000);
}

function emc(){
	document.getElementById("marcas").src="img/marcas3.png";
	setTimeout(function(){hp();},2000);
}

function hp(){		
	document.getElementById("marcas").src="img/marcas4.png";
	setTimeout(function(){intel();},2000);
}

function intel(){	
	document.getElementById("marcas").src="img/marcas5.png";
	setTimeout(function(){msi();},2000);
}

function msi(){
	document.getElementById("marcas").src="img/marcas6.png";
	setTimeout(function(){lenovo();},2000);
}

function lenovo(){
	document.getElementById("marcas").src="img/marcas7.png";
	setTimeout(function(){cisco();},2000);
}	
	
	
	
function PCS(){
	document.getElementById("equipamiento").src="img/equipamiento1.png";
	setTimeout(function(){teclado();},2000);
}

function teclado(){
	document.getElementById("equipamiento").src="img/equipamiento2.png";
	setTimeout(function(){almacenamiento();},2000);
}

function almacenamiento(){
	document.getElementById("equipamiento").src="img/equipamiento3.png";
	setTimeout(function(){portatil();},2000);
}	

function portatil(){
	document.getElementById("equipamiento").src="img/equipamiento4.png";
	setTimeout(function(){consumibles();},2000);
}

function consumibles(){
	document.getElementById("equipamiento").src="img/equipamiento5.png";
	setTimeout(function(){impresora();},2000);
}

function impresora(){
	document.getElementById("equipamiento").src="img/equipamiento6.png";
	setTimeout(function(){escaner();},2000);
}

function escaner(){
	document.getElementById("equipamiento").src="img/equipamiento7.png";
	setTimeout(function(){impresora3D();},2000);
}

function impresora3D(){	
	document.getElementById("equipamiento").src="img/equipamiento8.png";
	setTimeout(function(){impresoraetiquetas();},2000);
}

function impresoraetiquetas(){
	document.getElementById("equipamiento").src="img/equipamiento9.png";
	setTimeout(function(){monitores();},2000);
}

function monitores(){	
	document.getElementById("equipamiento").src="img/equipamiento10.png";
	setTimeout(function(){Networking();},2000);
}

function Networking(){
	document.getElementById("equipamiento").src="img/equipamiento11.png";
	setTimeout(function(){etiquetas();},2000);

}

function etiquetas(){
	document.getElementById("equipamiento").src="img/equipamiento12.jpg";
	setTimeout(function(){Plotter();},2000);
}

function Plotter(){
	document.getElementById("equipamiento").src="img/equipamiento13.png";
	setTimeout(function(){portatiles();},2000);
}

function portatiles(){
	document.getElementById("equipamiento").src="img/equipamiento14.png";
	setTimeout(function(){Rack();},2000);
}

function Rack(){
	document.getElementById("equipamiento").src="img/equipamiento15.png";
	setTimeout(function(){SAI();},2000);
}

function SAI(){	
	document.getElementById("equipamiento").src="img/equipamiento16.png";
	setTimeout(function(){Servidores();},2000);
}

function Servidores(){	
	document.getElementById("equipamiento").src="img/equipamiento17.png";
	setTimeout(function(){TPV();},2000);
}

function TPV(){
	document.getElementById("equipamiento").src="img/equipamiento18.png";
	setTimeout(function(){WORKSTATION();},2000);
}

function WORKSTATION(){
	document.getElementById("equipamiento").src="img/equipamiento19.png";
	setTimeout(function(){PCS();},2000);
}

function ValidaCampos(formulario){
	
	var expresion_regular_nombre = /^.+/;
	var expresion_regular_email = /^(.+\@.+\..+)$/; 
	var expresion_regular_telefono = /^\d{9}$/; //9 cifras numéricas
	
	if(expresion_regular_nombre.test(formulario.nombre.value)==false){
		alert('Campo Nombre no válido');
		return false; 
	}
	
	if(expresion_regular_email.test(formulario.email.value)==false){
		alert('Campo Email no válido');
		return false; 
	}
	
	if(expresion_regular_telefono.test(formulario.telefono.value)==false){
		alert('Campo Telefono no válido');
		return false; 
	}
	
	if (document.formulario.consultoria.checked == false && 
		document.formulario.desarrolloproyecto.checked == false &&
		document.formulario.realizacionpedidos.checked == false && 
		document.formulario.otros.checked == false){
		alert("Debe de seleccionar un asunto");
		return false;
	}
	
	alert('Gracias por rellenar el formulario');
	return true;
}