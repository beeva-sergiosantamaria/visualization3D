'use strict';  

var x = document.getElementById("txt");
setTimeout(function(){ x.className = " hideIndicaciones" }, 3000);
setTimeout(function(){ x.innerHTML="Antes de comenzar, permítenos que te hagamos unas breves indicaciones." }, 4000);
setTimeout(function(){ x.className = " indicaciones" }, 5000);

setTimeout(function(){ x.className = " hideIndicaciones" }, 10000);
setTimeout(function(){ x.innerHTML="Primero de todo, para optimizar la experiencia, te recomendamos que añadas un acceso directo de la aplicación al escritorio pulsando aquì." }, 11000);
setTimeout(function(){ x.className = " indicaciones" }, 12000);

setTimeout(function(){ 
	addToHomescreen(); }
	, 19000);

setTimeout(function(){ x.className = " hideIndicaciones" }, 19000);
setTimeout(function(){ x.innerHTML="Una vez añadido y ya dentro de la aplicación, observarás un punto de mira en forma de circulo blanco." }, 20000);
setTimeout(function(){ addToHomescreen(); }, 20000);
setTimeout(function(){ x.className = " indicaciones" }, 21000);

setTimeout(function(){ x.className = " hideIndicaciones" }, 26000);
setTimeout(function(){ x.innerHTML="Cuando el punto de mira este sobre un objeto este cambiara de color. Con ese punto de mira lo manejarás todo." }, 27000);
setTimeout(function(){ x.className = " indicaciones" }, 28000);

setTimeout(function(){ x.className = " hideIndicaciones" }, 34000);
setTimeout(function(){ x.innerHTML="Puedes echar un vistazo a tu alrededor, y cuando fijes el punto de mira en cualquier objeto aparecerán las acciones asociadas a el." }, 35000);
setTimeout(function(){ x.className = " indicaciones" }, 36000);

setTimeout(function(){ x.className = " hideIndicaciones" }, 41000);
setTimeout(function(){ x.innerHTML="Fija el punto de mira en cualquiera de las opciones para iniciarla." }, 42000);
setTimeout(function(){ x.className = " indicaciones" }, 43000);