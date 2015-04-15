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
setTimeout(function(){ x.innerHTML="Una vez añadido, cuando entres en la aplicación, observarás un punto de mira en forma de circulo blanco." }, 20000);
setTimeout(function(){ addToHomescreen(); }, 20000);
setTimeout(function(){ x.className = " indicaciones" }, 21000);

setTimeout(function(){ x.className = " hideIndicaciones" }, 26000);
setTimeout(function(){ x.innerHTML="Con ese punto de mira lo manejarás todo." }, 27000);
setTimeout(function(){ x.className = " indicaciones" }, 28000);

setTimeout(function(){ x.className = " hideIndicaciones" }, 30000);
setTimeout(function(){ x.innerHTML="Puedes echar un vistazo a tu alrededor, y cuando fijes el punto de mira en cualquier objeto aparecerán las acciones asociadas a el." }, 31000);
setTimeout(function(){ x.className = " indicaciones" }, 32000);