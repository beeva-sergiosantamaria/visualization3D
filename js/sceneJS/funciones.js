'use strict';  

function onDocumentMouseDown( event ) 
{
    raycaster.setFromCamera( mouse, camera );   
    raycaster2.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects( scene.children[4].children );
    var intersects2 = raycaster2.intersectObjects( scene.children[7].children );

    switch ( event.button ) {
            case 0: // left 
                var longMarcadorUnico = scene.children[9].children.length;
                var longi = scene.children[6].children.length;
                var longiChildren = scene.children.length;
                for (var a=0; a<longi; a ++) {
                       scene.children[6].children[a].scale.set(0,0,0);    
                       }
                for (var e=0; e<longiChildren; e++){
                      if(scene.children[e].type == "Sprite") scene.remove(scene.children[e]); 
                      }
                for( var t = 0; t<longMarcadorUnico; t++){
                                        if(t<2) valor=0;
                                        if(t>=2 && t<4) valor=350;
                                        if(t>=4 && t<6) valor=700;
                                        if(t%2 == 0) { scene.children[9].children[t].position.set(valor,16000,0);}
                                        else { scene.children[9].children[t].position.set(valor,16000,0); }
                                    }  
                for( var t = 0; t<longTravelPoints; t++){
                                        if(t<2) valor=0;
                                        if(t>=2 && t<4) valor=350;
                                        if(t>=4 && t<6) valor=700;
                                        if(t%2 == 0) { scene.children[10].children[t].position.set(valor,16000,0);}
                                        else { scene.children[10].children[t].position.set(valor,16000,0); }
                                    }
                for( var t = 0; t<longInfoPanels; t++){
                                        valor=0;
                                        scene.children[11].children[t].position.set(valor,16000,0);
                                    }                                 
                if(intersects[0] != undefined) {
                    var target = points[intersects[0].object.id-valorDescuento].point;
                    var tween = new TWEEN.Tween(camera.position).to({
                        x: target.x,
                        y: 800,
                        z: target.z
                    }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
                    }).start();
                   var  Landmark = camera.position;
                }
                if(intersects2[0] != undefined) {
                    grupoNuevo = INTERSECTED2.grupo;

                    for (var i = 0; i < scene.children[7].children.length; i++) {
                        if(scene.children[7].children[i].grupo == grupoActual && scene.children[7].children[i].name != 'soporte') {scene.children[7].children[i].activeItem = 0;scene.children[7].children[i].material.emissive.setHex(0x000000);scene.children[7].children[i].material.color.setHex(0x767676 );scene.children[7].children[i].material.opacity = 0.6}
                        }

                    for (var i = 0; i < scene.children[7].children.length; i++) {
                                if(grupoNuevo == scene.children[7].children[i].grupo) { 
                                        scene.children[7].children[i].material.opacity=1;
                                        scene.children[7].children[i].material.emissive.setHex( 0x088A4B);
                                        scene.children[7].children[i].material.color.setHex( 0x088A4B);
                                        scene.children[7].children[i].activeItem = 1;
                                        grupoActual = scene.children[7].children[i].grupo;
                                    }
                                }
                    for (var i = 0; i < scene.children[3].children.length; i++) {
                                    var alt;
                                    if(grupoActual == 3) alt = a2012[i];
                                    else if (grupoActual == 2) alt = a2013[i];
                                    else if (grupoActual == 1) alt = a2014[i];
                                    
                                    new TWEEN.Tween(scene.children[3].children[i].position).to({
                                                            y: alt
                                                        }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
                                                        }).delay(500).start(); 
                                    }
                    for (var i = 0; i < scene.children[5].children.length; i++) {

                                    var alt2;
                                    if(grupoActual == 3) alt2 = a2012[i];
                                    else if (grupoActual == 2) alt2 = a2013[i];
                                    else if (grupoActual == 1) alt2 = a2014[i];
                                    new TWEEN.Tween(scene.children[5].children[i].position).to({
                                                            y: alt2+15
                                                        }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
                                                        }).delay(500).start(); 
                            }                                   
                ///////////        
                }
                
                break;
            case 1: // middle
                borrarLineas();
                break;
            case 2: // right
                cambiarCamara(intersects[0].object.id-valorDescuento);
                break;
        }
}
function cambiarCamara(id) {
        borrarLineas();
        var target = points[id].point;
        var tween = new TWEEN.Tween(camera.position).to({
            x: target.x,
            y: 700,
            z: target.z
        }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
        }).start();
        colorSelect = 6;
        addlineas(scene, points, obj, id);
}

function borrarLineas() {
    var obje, i, obji,obje2, e,u;
      for ( i = scene.children.length - 1; i >= 0 ; i -- ) {
            obji = scene.children[ i ];
            if ( obji.type == "Line" || obji.type == "PointCloud") {
                scene.remove(obji);
            }
        }
        for (e = scene.children[3].children.length - 1; e >= 0 ; e --  ) {
            obje = scene.children[3].children[e];
                obje.material.emissive.setHex(obj.colors[e]);
				obje.material.color.setHex(obj.colors[e]);
				obje.material.opacity = 0.7;
        }
        for (u = scene.children[4].children.length - 1; u >= 0 ; u --  ) {
            obje2 = scene.children[4].children[u];
                obje2.material.emissive.setHex(0x767676);
				obje2.material.color.setHex(0x000000);
				obje2.material.opacity = 0.9;
        }
	colorSelect = 1;			
}

function makeTextSprite( message, parameters )
{
	if ( parameters === undefined ) parameters = {};
	
	var fontface = parameters.hasOwnProperty("fontface") ? 
		parameters["fontface"] : "Arial";
	
	var fontsize = parameters.hasOwnProperty("fontsize") ? 
		parameters["fontsize"] : 18;
	
	var borderThickness = parameters.hasOwnProperty("borderThickness") ? 
		parameters["borderThickness"] : 4;
	
	var borderColor = parameters.hasOwnProperty("borderColor") ?
		parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
	
	var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
		parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };

	var Color = parameters.hasOwnProperty("color") ?
		parameters["color"] : { r:255, g:255, b:255, a:1.0 };	

	var spriteAlignment = THREE.SpriteAlignment;
		
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = "Bold " + fontsize + "px " + fontface;
    
	// get size data (height depends only on font size)
	var metrics = context.measureText( message );
	var textWidth = metrics.width;
	
	// background color
	context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
								  + backgroundColor.b + "," + backgroundColor.a + ")";
	// border color
	context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
								  + borderColor.b + "," + borderColor.a + ")";

	context.lineWidth = borderThickness;
	roundRect(context, borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
	// 1.4 is extra height factor for text below baseline: g,j,p,q.
	
	// text color
	context.fillStyle = "rgba(255, 255, 255, 1.0)";

	context.fillText( message, borderThickness, fontsize + borderThickness);
	
	// canvas contents will be used for a texture
	var texture = new THREE.Texture(canvas) 
	texture.needsUpdate = true;

	var spriteMaterial = new THREE.SpriteMaterial( 
		{ map: texture, useScreenCoordinates: false, alignment: spriteAlignment } );
	var sprite = new THREE.Sprite( spriteMaterial );
	sprite.scale.set(400,200,4.0);
	return sprite;	
}

// function for drawing rounded rectangles
function roundRect(ctx, x, y, w, h, r) 
{
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.lineTo(x+w-r, y);
    ctx.quadraticCurveTo(x+w, y, x+w, y+r);
    ctx.lineTo(x+w, y+h-r);
    ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    ctx.lineTo(x+r, y+h);
    ctx.quadraticCurveTo(x, y+h, x, y+h-r);
    ctx.lineTo(x, y+r);
    ctx.quadraticCurveTo(x, y, x+r, y);
    ctx.closePath();
    ctx.fill();
	ctx.stroke();   
}
function toggleFullscreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
};

function normalizar(num){
    var aux = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    aux = aux.substring(0, aux.length - 3);
    return aux;
}

function addCarteles(punto){
	var infoDoc = document.getElementById("panel");

                                        var datos = document.createElement('div');
                                            datos.className = 'datos';
                                            datos.id = 'datitos';
                                            infoDoc.appendChild(datos);

                                        var distrito = document.createElement('h3');
                                            distrito.className = 'distrito';
                                            distrito.id = 'distritito';
                                            distrito.textContent =obj.distritosName[punto];
                                            datos.appendChild(distrito);

                                        var ingresos = document.createElement('p');
                                            ingresos.className = 'ingresos';
                                            ingresos.id = 'ingresitos';
                                            ingresos.textContent ="Ingresos: "+normalizar(obj.ingre[punto])+" €.";
                                            datos.appendChild(ingresos);

                                        var pagos = document.createElement('p');
                                            pagos.className = 'pagos';
                                            pagos.id = 'paguitos';
                                            pagos.textContent ="pagos: "+normalizar(obj.pag[punto])+".";
                                            datos.appendChild(pagos);

                                        var tarjetas = document.createElement('p');
                                            tarjetas.className = 'tarjetas';
                                            tarjetas.id = 'tarjetitas';
                                            tarjetas.textContent ="Nº. tajetas: "+normalizar(obj.tarj[punto])+".";
                                            datos.appendChild(tarjetas);
                                        var ratio = document.createElement('p');
                                            ratio.className = 'ratio';
                                            ratio.id = 'ratito';
                                            ratio.textContent ="RATIO: ().";
                                            datos.appendChild(ratio);
}