'use strict';

var voiceEngine = new VoiceEngine();

init();
animate();

function init() {
   
    scene = new THREE.Scene();

    //controlsLeap = new Leap.Controller();
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 200000);

     /// direct light
    var light = new THREE.DirectionalLight(0xA9D0F5);
    light.position.set(4500, 1200, 5000).normalize();
    scene.add(light);

     if (window.DeviceOrientationEvent && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("panel").classList.add("panel");
        document.getElementById("info").classList.add("info");
        console.log("Oriented device");
        camera.position.set(-200, 800, 4500);
        camera.rotation.y = 90;
        scene.add(camera);
        controlsdevice = new DeviceOrientationController(camera);
        controlsdevice.connect();
		voiceEngine.start();

    }

    else {
        document.getElementById("menu").style.display = "";
        document.getElementById("puntero").style.display = "none";
        document.getElementById("info").classList.add("info2");
        document.getElementById("panel").classList.add("panel2");

        camera.position.set(0, 4000, 10000);
        scene.add(camera);
        controls = new THREE.FirstPersonControls( camera );
				controls.movementSpeed = 1000;
				controls.lookSpeed = 0.06;
        valorDescuento = 34;        
		//voiceEngine.start();
    }

   
    var geometry = new THREE.SphereGeometry(30000, 60, 40);
    geometry.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));
    var material = new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('images/textures/skyline9.jpg')
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    var container = document.createElement('div');

    group = new THREE.Group();
    group2 = new THREE.Group();
    leyendasGroup = new THREE.Group();
    graficas = new THREE.Object3D();
    marcador = new THREE.Group();
    fechasMarcadores = new THREE.Group();
    marcadorUnico = new THREE.Object3D();
    if(controlsdevice) travelPoints = new THREE.Object3D();
    //travelPoints = new THREE.Object3D();
    if(controlsdevice) infoPanels = new THREE.Object3D();

    scene.add(group);
    scene.add(group2);
    scene.add(leyendasGroup);
    scene.add(graficas);
    scene.add(marcador);
    scene.add(fechasMarcadores);
    scene.add(marcadorUnico);
    if(controlsdevice) scene.add(travelPoints);
    //scene.add(travelPoints);
    if(controlsdevice) scene.add(infoPanels);
    
    /*var geometry = new THREE.SphereGeometry( 100, 100, 100 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(5000, 2000, 5000);
    scene.add( sphere );
    var geometry3 = new THREE.SphereGeometry( 100, 100, 100 );
    var material3 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere3 = new THREE.Mesh( geometry3, material3 );
    sphere3.position.set(-5000, 1500, 3000);
    scene.add( sphere3);
    var geometry2 = new THREE.SphereGeometry( 100, 100, 100 );
    var material2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere2 = new THREE.Mesh( geometry2, material2 );
    sphere2.position.set(0, 2000, -10300);
    scene.add( sphere2 );*/

    addGeoObject(group, obj);
    addGeoObject2(group2, obj);
    addLeyendas(scene, points, obj,leyendasGroup);
    addGraficas(graficas);
    addMarcadores(marcador);
    addFechaMarcadores(fechasMarcadores);
    addMarcadorUnico(marcadorUnico);
    if(controlsdevice) addTravelPoints(travelPoints);
    //addTravelPoints(travelPoints);
    if(controlsdevice) addInfoPanels(infoPanels);

    var light2 = new THREE.DirectionalLight(0xec8725);
    light2.position.set(0, 1000, -10300).normalize();
    scene.add(light2);

    var light3 = new THREE.DirectionalLight(0xA9D0F5);
    light3.position.set(-5000, 1200, 3000).normalize();
    scene.add(light3);

    document.body.appendChild(container);
    raycaster = new THREE.Raycaster();
    raycaster2 = new THREE.Raycaster();
    raycaster3 = new THREE.Raycaster();
    raycaster4 = new THREE.Raycaster();

    /// Global : renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x0B3B17);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    container.appendChild(renderer.domElement);


if (window.DeviceOrientationEvent && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        effect = new THREE.StereoEffect(renderer);
        effect.setSize(window.innerWidth, window.innerHeight);
        document.onclick = function () {
            toggleFullscreen();
        };
    }

document.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener('resize', onWindowResize, false);
document.addEventListener( 'mousedown', onDocumentMouseDown, false );
};
 

function onDocumentMouseMove( event ) {

    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
		if (effect) effect.setSize( window.innerWidth, window.innerHeight );

		if(controls) controls.handleResize();
        //composer.reset();
};

var cont = 0;
var cont2 = 0;
var cont3 = 0;
var cont4 = 0;
function render() {
		//group.rotation.y += ( group.rotation.y ) * 0.05;
        //if(!effect) {
            raycaster.setFromCamera( mouse, camera );
            raycaster2.setFromCamera( mouse, camera );
            raycaster3.setFromCamera( mouse, camera );
            raycaster4.setFromCamera( mouse, camera );

            longDistritos = scene.children[4].children.length;
            longMarcador = scene.children[7].children.length;
            longMarcadorUnico = scene.children[9].children.length;
            longTravelPoints = scene.children[10].children.length;
            longInfoPanels = scene.children[11].children.length;

            var intersects = raycaster.intersectObjects( scene.children[4].children );
            var intersects2 = raycaster2.intersectObjects( scene.children[7].children );
            var intersects3 = raycaster3.intersectObjects( scene.children[9].children );
            var intersects4 = raycaster4.intersectObjects( scene.children[10].children );

                    /////////////////////////////
                    //interseccion travel points
                    /////////////////////////////
            //if(controlsdevice) {                
                    if (INTERSECTED4) cont4 = cont4+1;
                    if ( intersects4.length > 0 ) {

                    if ( INTERSECTED4 != intersects4[ 0 ].object && intersects4[ 0 ].object.activeItem == 0) {

                            if ( INTERSECTED4 ) { INTERSECTED4.material.emissive.setHex( INTERSECTED4.currentHex ); INTERSECTED4.material.color.setHex( INTERSECTED4.currentHexcol );}
                            INTERSECTED4 = intersects4[ 0 ].object;

                            INTERSECTED4.currentHex = INTERSECTED4.material.emissive.getHex();
                            INTERSECTED4.currentHexcol = INTERSECTED4.material.color.getHex();
                            INTERSECTED4.material.emissive.setHex( 0x0B3B24);
                            INTERSECTED4.material.color.setHex( 0x0B3B24);

                            cont4 = 0;
                        }

                    } else {
                       
                        if ( INTERSECTED4 && INTERSECTED4.activeItem != 1 ) { INTERSECTED4.material.emissive.setHex( INTERSECTED4.currentHex );INTERSECTED4.material.color.setHex( INTERSECTED4.currentHexcol );INTERSECTED4.material.opacity = 0.6 }

                        INTERSECTED4 = null;
                    }
                        if (INTERSECTED4 && cont4>30) {

                        if ( intersects4.length > 0 && cont4 == 31) {
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

                            if (INTERSECTED4.name == 'viajar') {
                                var tween = new TWEEN.Tween(camera.position).to({
                                        x: target.x,
                                        y: 800,
                                        z: target.z
                                    }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
                                    }).start();

                            }
                            if (INTERSECTED4.name == 'detalles') {
                                cambiarCamara(objetoTarget);

                            }
                            if (INTERSECTED4.name == 'borrar') {
                                borrarLineas(objetoTarget);

                            }
                          }
                        }
                    //}    
                    /////////////////////////////
                    // interseccion marcadores unicos
                    /////////////////////////////

                    if (INTERSECTED3) cont3 = cont3+1;

                    if ( intersects3.length > 0 ) {

                    if ( INTERSECTED3 != intersects3[ 0 ].object && intersects3[ 0 ].object.activeItem == 0) {

                            if ( INTERSECTED3 ) { INTERSECTED3.material.emissive.setHex( INTERSECTED3.currentHex ); INTERSECTED3.material.color.setHex( INTERSECTED3.currentHexcol );}
                            INTERSECTED3 = intersects3[ 0 ].object;

                            INTERSECTED3.currentHex = INTERSECTED3.material.emissive.getHex();
                            INTERSECTED3.currentHexcol = INTERSECTED3.material.color.getHex();
                            //INTERSECTED.currentOpacity = INTERSECTED.material.opacity;
                            INTERSECTED3.material.emissive.setHex( 0x0B3B24);
                            INTERSECTED3.material.color.setHex( 0x0B3B24);

                            cont3 = 0;
                        }

                    } else {
                       
                        if ( INTERSECTED3 && INTERSECTED3.activeItem != 1 ) { INTERSECTED3.material.emissive.setHex( INTERSECTED3.currentHex );INTERSECTED3.material.color.setHex( INTERSECTED3.currentHexcol );INTERSECTED3.material.opacity = 0.6 }

                        INTERSECTED3 = null;
                    }
                    //if (INTERSECTED3 && cont2>60 && controlsdevice) {
                      if (INTERSECTED3 && cont3>60) {

                        if ( intersects3.length > 0 && cont3 == 61) {
                                if(INTERSECTED3.name =='2012') {
                                    var alt = a2012[objetoTarget];
                                    new TWEEN.Tween(objetoActual.position).to({
                                                            y: alt
                                                        }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
                                                        }).delay(300).start();
                                    resetObject = objetoActual;                     
                                }
                                if(INTERSECTED3.name =='2013') {
                                    var alt = a2013[objetoTarget];
                                    new TWEEN.Tween(objetoActual.position).to({
                                                            y: alt
                                                        }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
                                                        }).delay(300).start();
                                    resetObject = objetoActual;     
                                }
                                if(INTERSECTED3.name =='2014') {
                                    var alt = a2014[objetoTarget];
                                    new TWEEN.Tween(objetoActual.position).to({
                                                            y: alt
                                                        }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
                                                        }).delay(300).start();
                                    resetObject = objetoActual;                    
                                }                     
                            }
                        }
            		/////////////////////////////
            		// interseccion marcadores
            		/////////////////////////////

            		if (INTERSECTED2) cont2 = cont2+1;
            		if ( intersects2.length > 0 ) {

                    if ( INTERSECTED2 != intersects2[ 0 ].object && intersects2[ 0 ].object.activeItem == 0) {

                            if ( INTERSECTED2 ) { INTERSECTED2.material.emissive.setHex( INTERSECTED2.currentHex ); INTERSECTED2.material.color.setHex( INTERSECTED2.currentHexcol );}
                            INTERSECTED2 = intersects2[ 0 ].object;

                            INTERSECTED2.currentHex = INTERSECTED2.material.emissive.getHex();
                            INTERSECTED2.currentHexcol = INTERSECTED2.material.color.getHex();
                            //INTERSECTED.currentOpacity = INTERSECTED.material.opacity;
                            INTERSECTED2.material.emissive.setHex( 0x0B3B24);
                            INTERSECTED2.material.color.setHex( 0x0B3B24);

                            cont2 = 0;
                        }

                    } else {
                       
                        if ( INTERSECTED2 && INTERSECTED2.activeItem != 1 ) { INTERSECTED2.material.emissive.setHex( INTERSECTED2.currentHex );INTERSECTED2.material.color.setHex( INTERSECTED2.currentHexcol );INTERSECTED2.material.opacity = 0.6 }

                        INTERSECTED2 = null;
                    }
                    if (INTERSECTED2 && cont2>30 && controlsdevice) {

	                    if ( intersects2.length > 0 && cont2 == 31) {

                    		grupoNuevo = INTERSECTED2.grupo;

		                    for (var i = 0; i < longMarcador; i++) {
			                       if(scene.children[7].children[i].grupo == grupoActual && scene.children[7].children[i].name !='soporte') {scene.children[7].children[i].activeItem = 0;scene.children[7].children[i].material.emissive.setHex(0x000000);scene.children[7].children[i].material.color.setHex(0x767676 );scene.children[7].children[i].material.opacity = 0.6}
			                    }

			                for (var i = 0; i < longMarcador; i++) {
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
												        }).delay(2000).start(); 
									}
							for (var i = 0; i < scene.children[5].children.length; i++) {

									var alt2;
	                        		if(grupoActual == 3) alt2 = a2012[i];
	                        		else if (grupoActual == 2) alt2 = a2013[i];
	                        		else if (grupoActual == 1) alt2 = a2014[i];
									new TWEEN.Tween(scene.children[5].children[i].position).to({
												            y: alt2+15
												        }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
												        }).delay(2000).start(); 
							     }		
	                        }
	                    }

                    /////////////////////////////////////////
                    // interseccion distritos
                    /////////////////////////////////////////

                    if (INTERSECTED) cont = cont+1;
                    if (INTERSECTED==null && controlsdevice) document.getElementById("info").style.right="-100px";
                    if (INTERSECTED==null && controls) document.getElementById("info").style.right="-200px";
                    if ( intersects.length > 0 ) {

                        if ( INTERSECTED != intersects[ 0 ].object ) {

                            if ( INTERSECTED ) { INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex ); INTERSECTED.material.color.setHex( INTERSECTED.currentHexcol );}
                            INTERSECTED = intersects[ 0 ].object;
                            //INTERSECTED2 = intersects2[ 0 ].object;

                            INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                            INTERSECTED.currentHexcol = INTERSECTED.material.color.getHex();
                            //INTERSECTED.currentOpacity = INTERSECTED.material.opacity = 0.7;
                            INTERSECTED.material.emissive.setHex( 0xA4A4A4);
                            INTERSECTED.material.color.setHex( 0x151515);
                            if (controlsdevice) document.getElementById("info").style.right="-100px";document.getElementById("info").style.transition="all 0.2s";
                            if (controls) document.getElementById("info").style.right="-200px";document.getElementById("info").style.transition="all 0.2s";
                            //scene.children[27].scale.set(1,0,1);
                            if (document.getElementById("datitos")) document.getElementById("datitos").remove();

                            cont = 0;
                        }

                    } else {
                        
                        if ( INTERSECTED ) { INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );INTERSECTED.material.color.setHex( INTERSECTED.currentHexcol ); }

                        INTERSECTED = null;
                    } 
                    if (INTERSECTED && cont>45) {
                        if ( intersects.length > 0 && cont == 46) {
                            objetoActual = INTERSECTED;
                            objetoTarget = intersects[0].object.id-valorDescuento;
                            target = points[intersects[0].object.id-valorDescuento].point;
                            for( var t = 0; t<longMarcadorUnico; t++){
                                        if(t<2) valor=0;
                                        if(t>=2 && t<4) valor=350;
                                        if(t>=4 && t<6) valor=700;
                                        if(t%2 == 0) { scene.children[9].children[t].position.set(valor,8000,0);}
                                        else { scene.children[9].children[t].position.set(valor,8000,0); }
                                    }
                            for (var t = 0; t<longTravelPoints; t++){
                                        if(t<2) valor=0;
                                        if(t>=2 && t<4) valor=350;
                                        if(t>=4 && t<6) valor=700;
                                        if(t%2 == 0) { scene.children[10].children[t].position.set(valor,8000,0);}
                                        else { scene.children[10].children[t].position.set(valor,8000,0); }   
                            }
                            for (var t = 0; t<longInfoPanels; t++){
                                        valor=0;
                                        scene.children[11].children[t].position.set(valor,8000,0);   
                            }         
                        }      

                    	if ( intersects.length > 0 && cont == 65) {
                                    destino = intersects[0].object.id-valorDescuento;

                                    scene.children[9].position.set(points[destino].point.x,0,points[destino].point.z);
                                    scene.children[10].position.set(points[destino].point.x,0,points[destino].point.z);
                                    scene.children[11].position.set(points[destino].point.x,0,points[destino].point.z);

                                    for( var t = 0; t<longMarcadorUnico; t++){
                                         new TWEEN.Tween(scene.children[9].children[t].position).to({
                                                    y: 700
                                                }).easing(TWEEN.Easing.Quintic.In).delay(300).onUpdate(function () {
                                                }).delay(300).start(); 
                                    }
                                    for( var t = 0; t<longMarcadorUnico; t++){
                                        if (scene.children[9].children[t].name=='letrero') scene.children[9].children[t].material.opacity = 1;
                                        else scene.children[9].children[t].material.opacity = 0.6;
                                    }
                                    for( var t = 0; t<longTravelPoints; t++){
                                         new TWEEN.Tween(scene.children[10].children[t].position).to({
                                                    y: 970
                                                }).easing(TWEEN.Easing.Quintic.In).delay(300).onUpdate(function () {
                                                }).delay(300).start(); 
                                    }
                                    for( var t = 0; t<longTravelPoints; t++){
                                        if (scene.children[10].children[t].name=='letrero') scene.children[10].children[t].material.opacity = 1;
                                        else scene.children[10].children[t].material.opacity = 0.6;
                                    }
                                    for( var t = 0; t<longInfoPanels; t++){
                                        if (t<2) {
                                            new TWEEN.Tween(scene.children[11].children[t].position).to({
                                                    y: 1100
                                                }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
                                                }).delay(300).start(); 
                                        }
                                        else  {
                                              new TWEEN.Tween(scene.children[11].children[t].position).to({
                                                    y: 840
                                                }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
                                                }).delay(300).start(); 
                                        }
                                    }


                                    scene.children[9].lookAt( new THREE.Vector3( camera.position.x,200,camera.position.z ) ); 
                                    scene.children[10].lookAt( new THREE.Vector3( camera.position.x,200,camera.position.z ) );
                                    scene.children[11].lookAt( new THREE.Vector3( camera.position.x,200,camera.position.z ) );

                                        var punto = intersects[ 0 ].object.id-valorDescuento; 
                                        console.log(punto);

                             			addCarteles(punto);
                                        
		                                if(punto==7 || punto==17) {    
		                                    var alt = 80;

		                                    var margin = 80;

		                                    var longi = scene.children[6].children.length;

		                                    for (var a=0; a<longi; a ++) {

		                                    var altu = Math.floor((Math.random() * 300) + 80);

		                             		scene.children[6].children[a].position.set(points[punto].point.x+(80*a),points[punto].point.y+(altu/2)+a2012[punto],points[punto].point.z-(40*a));
								
		                                    scene.children[6].children[a].scale.set(1,1,1);
                                            if (scene.children[6].children[a].name != 'letrero') {
        		                                     new TWEEN.Tween(scene.children[6].children[a].scale).to({
        										            y: altu
        										        }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
        										        }).start(); 
        										     }
                                                }     
										    var spritey = makeTextSprite( 'Histórico de uso de tarjetas', 
													{ fontsize: 20, borderColor: {r:255, g:0, b:0, a:0}, backgroundColor: {r:100, g:100, b:100, a:0.5}, color: '#FF8000' } );
												spritey.position.set(points[punto].point.x+300, 620, points[punto].point.z);
												scene.add( spritey );
												    
		                                    }
		                                 if(punto!=7 && punto!=17) {
		                                 	var longi = scene.children[6].children.length;
		                                 	var longiChildren = scene.children.length;
		                                 	for (var a=0; a<longi; a ++) {
											    scene.children[6].children[a].scale.set(0,0,0);    
		                                 		}
			                                for (var e=0; e<longiChildren; e++){
			                                 	if(scene.children[e].type == "Sprite") scene.remove(scene.children[e]);	
			                                 	}
		                                 	}
                                 } 

                            if (controlsdevice) document.getElementById("info").style.right="80px"; document.getElementById("info").style.transition="all 0.2s";
                            if (controls) document.getElementById("info").style.right="150px"; document.getElementById("info").style.transition="all 0.2s";
                        }
                   
                //}

		if(effect) effect.render( scene, camera );
        else renderer.render( scene, camera );
        //composer.render();
};

function animate() {

		requestAnimationFrame( animate );
        TWEEN.update();

		render();

		/*if ( controls.gamma < 1 && controls.gamma > 0 ) { controls.autoForward = true; }
		if ( controls.gamma > -1 && controls.gamma < 0 ) { controls.autoForward = false; }*/

		if(controls) controls.update( clock.getDelta() );
		if(controlsdevice) controlsdevice.update();
		if(controlsLeap) controlsLeap.up

};

/////////////////////////
///  CONTROLES DE VOZ
/////////////////////////

voiceEngine.addAction(new VoiceAction("centro", function(){
      console.log('no entra aqui');
      cambiarCamara(0);
    }));
voiceEngine.addAction(new VoiceAction("arganzuela", function(){
      cambiarCamara(1);
    }));
voiceEngine.addAction(new VoiceAction("retiro", function(){
      cambiarCamara(2);
    }));
voiceEngine.addAction(new VoiceAction("salamanca", function(){
      cambiarCamara(3);
    }));
voiceEngine.addAction(new VoiceAction("chamartin", function(){
      cambiarCamara(4);
    }));
voiceEngine.addAction(new VoiceAction("tetuan", function(){
      cambiarCamara(5);
    }));
voiceEngine.addAction(new VoiceAction("chamberi", function(){
      cambiarCamara(6);
    }));
voiceEngine.addAction(new VoiceAction("fuencarral", function(){
      cambiarCamara(7);
    }));
voiceEngine.addAction(new VoiceAction("moncloa", function(){
      cambiarCamara(8);
    }));
voiceEngine.addAction(new VoiceAction("latina", function(){
      cambiarCamara(9);
    }));
voiceEngine.addAction(new VoiceAction("caravanchel", function(){
      cambiarCamara(10);
    }));
voiceEngine.addAction(new VoiceAction("usera", function(){
      cambiarCamara(11);
    }));
voiceEngine.addAction(new VoiceAction("puente vallecas", function(){
      cambiarCamara(12);
    }));
voiceEngine.addAction(new VoiceAction("moratalaz", function(){
      cambiarCamara(13);
    }));
voiceEngine.addAction(new VoiceAction("ciudad lineal", function(){
      cambiarCamara(14);
    }));
voiceEngine.addAction(new VoiceAction("hortaleza", function(){
      cambiarCamara(15);
    }));
voiceEngine.addAction(new VoiceAction("villaverde", function(){
	console.log('no entra');
      cambiarCamara(16);
    }));
voiceEngine.addAction(new VoiceAction("villa vallecas", function(){
      cambiarCamara(17);
    }));
voiceEngine.addAction(new VoiceAction("vicalvaro", function(){
      cambiarCamara(18);
    }));
voiceEngine.addAction(new VoiceAction("san blas", function(){
     cambiarCamara(19);
    }));
voiceEngine.addAction(new VoiceAction("barajas", function(){
      cambiarCamara(20);
    }));
voiceEngine.addAction(new VoiceAction("general", function(){
      var position = { x: 0, y: 8000, z: 10000 };
        var tween = new TWEEN.Tween(camera.position).to({
            x: position.x,
            y: position.y,
            z: position.z
        }).easing(TWEEN.Easing.Quintic.In).onUpdate(function () {
        }).start();
     render();
    }));
voiceEngine.addAction(new VoiceAction("borrar", function(){
      borrarLineas(); 
    }));