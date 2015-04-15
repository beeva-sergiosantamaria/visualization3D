'use strict'; 

var x = document.getElementById("txt");
var t = document.getElementById("caja");
var y = document.getElementById("cajaImagen1");
var z = document.getElementById("cajaImagen2");
var r = document.getElementById("cajaImagen3");

setTimeout(function(){ x.className = " hideIndicaciones" }, 3000);
setTimeout(function(){ x.innerHTML="Antes de comenzar, permítenos que te hagamos unas breves indicaciones." }, 4000);
setTimeout(function(){ x.className = " indicaciones" }, 5000);

setTimeout(function(){ x.className = " hideIndicaciones" }, 10000);
setTimeout(function(){ x.innerHTML="Primero de todo, para optimizar la experiencia, te recomendamos que añadas un acceso directo de la aplicación al escritorio." }, 11000);
setTimeout(function(){ x.className = " indicaciones" }, 12000);

/*setTimeout(function(){ 
	var ath = addToHomescreen({
   autostart: false
	});
	ath.clearSession(); 
	ath.show(); 
	addToHomescreen(); }
	, 2000);*/

setTimeout(function(){ x.className = " hideIndicaciones"}, 19000);
setTimeout(function(){ x.innerHTML = "Una vez añadido y ya dentro de la aplicación, observarás un punto de mira en forma de circulo blanco." }, 20000);
setTimeout(function(){ y.className = " cajaImagen1" }, 21000);
setTimeout(function(){ addToHomescreen(); }, 20000);
setTimeout(function(){ x.className = " indicaciones" }, 21000);

setTimeout(function(){ x.className = " hideIndicaciones" }, 26000);
setTimeout(function(){ x.innerHTML = "Cuando el punto de mira este sobre un objeto este cambiara de color.<br> Con ese punto de mira lo manejarás todo." }, 27000);
setTimeout(function(){ x.className = " indicaciones" }, 28000);

setTimeout(function(){ x.className = " hideIndicaciones"; y.className = " cajaImagenHide1"  }, 34000);
setTimeout(function(){ x.innerHTML = " Puedes echar un vistazo a tu alrededor, y cuando fijes el punto de mira en cualquier objeto aparecerán las acciones asociadas a el." }, 35000);
setTimeout(function(){ x.className = " indicaciones" }, 36000);

setTimeout(function(){ x.className = " hideIndicaciones" }, 41000);
setTimeout(function(){ t.className = " caja2" }, 42000);
setTimeout(function(){ x.innerHTML = "1.- Datos dispone de 3 fichas anuales con las que modificar la altura del distrito en funcion de los ingresos de ese año en concreto.<br>2.- Viajar te ofrece la posibilidad de desplazarte automaticamente a ese distrito.<br>3.- Detalles te ofrece la posibilidad de activar la vista de detalles.<br>4.- Borrar restaura el mapa al estado inicial." }, 42000);
setTimeout(function(){ z.className = " cajaImagen2" }, 43000);
setTimeout(function(){ x.className = " indicaciones2" }, 44000);
setTimeout(function(){ z.className = " cajaImagenHide" }, 66000);
setTimeout(function(){ x.className = " hideIndicaciones" }, 67000);

setTimeout(function(){ t.className = " caja2" }, 68000);
setTimeout(function(){ x.innerHTML = "Detalles: <br> Al activar la opcion detalles, la configuración del mapa camiará. Las líneas rojas te indican todos aquellos distritos desde los que las personas han ido a realizar compras al distrito en el que te encuentras.<br> El resto de distritos se presenaran translucidos." }, 68000);
setTimeout(function(){ r.className = " cajaImagen2" }, 69000);
setTimeout(function(){ x.className = " indicaciones2" }, 70000);
setTimeout(function(){ r.className = " cajaImagenHide" }, 80000);
setTimeout(function(){ x.className = " hideIndicaciones" }, 80000);

setTimeout(function(){ x.innerHTML = " Fija el punto de mira en cualquiera de las opciones para iniciarla." }, 81000);
setTimeout(function(){ x.className = " indicaciones" }, 82000);
setTimeout(function(){ x.className = " hideIndicaciones" }, 86000);