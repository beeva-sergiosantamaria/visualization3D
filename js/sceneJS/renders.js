
'use strict'; 
function addInfoPanels(infoPanels) {
var travelGeometria, travelMaterial, grupotravel, posIni;
posIni = -1000;	
for(var a = 0; a<2; a++) {	
	var canvas1 = document.createElement('canvas');
		var context1 = canvas1.getContext('2d');
		context1.DoubleSide = true;
		context1.font = "Bold 60px Arial";
		context1.fillStyle = "rgba(255,255,255,1)";
	    if ( a == 0) context1.fillText('Acciones: ',0, 100);
	    else context1.fillText('Datos: ',0, 100);
		var texture1 = new THREE.Texture(canvas1) 
		texture1.needsUpdate = true;
	      
	    var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide, opacity: 1 } );
	    material1.transparent = true;

	    var mesh1 = new THREE.Mesh(
	        new THREE.PlaneBufferGeometry(canvas1.width, canvas1.height),
	        material1
	      );
	    mesh1.name = 'info';
		travelGeometria = new THREE.BoxGeometry(300,110,10,1,1,1);
		travelMaterial = new THREE.MeshPhongMaterial({
			    	color: 0xffffff,
			    	transparent: true,
			    	opacity: 0.1
			    });
		grupotravel = new THREE.Mesh(travelGeometria, travelMaterial);
		if(a==0) {
			mesh1.position.set(posIni,16000,-1000);
			grupotravel.position.set(posIni,16000,-1000);
		}
		else {
			mesh1.position.set(posIni,16000,-1000);
			grupotravel.position.set(posIni,16000,-1000);
		}
		grupotravel.name = 'infoCube';
		infoPanels.add(mesh1);
		infoPanels.add(grupotravel);
	}
}

function addTravelPoints(travelPoints) {
	var travelGeometria, travelMaterial, grupotravel, posIni, posIni2;
		posIni = -1000;
		posIni2 = -700;
	for (var a = 0; a<3; a++) {
		var canvas1 = document.createElement('canvas');
		var context1 = canvas1.getContext('2d');
		context1.DoubleSide = true;
		context1.font = "Bold 60px Arial";
		context1.fillStyle = "rgba(255,255,255,1)";
	    if(a==0) context1.fillText('viajar', 50, 100);
	    if(a==1) context1.fillText('detalles', 50, 100);
	    if(a==2) context1.fillText('borrar', 50, 100);

		var texture1 = new THREE.Texture(canvas1) 
		texture1.needsUpdate = true;
	      
	    var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide, opacity: 0 } );
	    material1.transparent = true;

	    var mesh1 = new THREE.Mesh(
	        new THREE.PlaneBufferGeometry(canvas1.width, canvas1.height),
	        material1
	      );
	    mesh1.name = 'letrero';
		travelGeometria = new THREE.BoxGeometry(300,110,10,1,1,1);
		if(a==0) {
			travelMaterial = new THREE.MeshPhongMaterial({
			    	color: 0x3ADF00,
			    	transparent: true,
			    	opacity: 0
			    });
		}
		if(a==1) {
			travelMaterial = new THREE.MeshPhongMaterial({
			    	color: 0xFFFF00,
			    	transparent: true,
			    	opacity: 0
			    });
		}
		if(a==2) {
			travelMaterial = new THREE.MeshPhongMaterial({
			    	color: 0xFF0000,
			    	transparent: true,
			    	opacity: 0
			    });
		}
		grupotravel = new THREE.Mesh(travelGeometria, travelMaterial);
		mesh1.position.set(posIni+(350*a),16000,-1000);
		grupotravel.position.set(posIni+(350*a),16000,-1000);
		if(a==0) grupotravel.name = 'viajar';
		if(a==1) grupotravel.name = 'detalles';
		if(a==2) grupotravel.name = 'borrar';
		grupotravel.activeItem = 0;
		travelPoints.add(mesh1);
		travelPoints.add(grupotravel);
	}
}
function addMarcadorUnico(marcadorUnico) {
	var marcadoresGeometria, marcadoresMaterial, grupoMarcadores, posIni;
		posIni = -1000;
	for (var a = 0; a<3; a++) {
		 var canvas1 = document.createElement('canvas');
		var context1 = canvas1.getContext('2d');
		context1.DoubleSide = true;
		context1.font = "Bold 80px Arial";
		context1.fillStyle = "rgba(255,255,255,1)";
	    if(a==0) context1.fillText('2012', 50, 100);
	    if(a==1) context1.fillText('2013', 50, 100);
	    if(a==2) context1.fillText('2014', 50, 100);

		var texture1 = new THREE.Texture(canvas1) 
		texture1.needsUpdate = true;
	      
	    var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide, opacity: 0 } );
	    material1.transparent = true;

	    var mesh1 = new THREE.Mesh(
	        new THREE.PlaneBufferGeometry(canvas1.width, canvas1.height),
	        material1
	      );
	    mesh1.name = 'letrero';
		marcadoresGeometria = new THREE.BoxGeometry(300,150,10,1,1,1);
		marcadoresMaterial = new THREE.MeshPhongMaterial({
		    	color: 0x767676,
		    	transparent: true,
		    	opacity: 0
		    });
		grupoMarcadores = new THREE.Mesh(marcadoresGeometria, marcadoresMaterial);
		mesh1.position.set(posIni+(350*a),16000,-1000);
		grupoMarcadores.position.set(posIni+(350*a),16000,-1000);
		if(a==0) { grupoMarcadores.grupo = 1; grupoMarcadores.name = '2012'; }
		if(a==1) { grupoMarcadores.grupo = 2; grupoMarcadores.name = '2013'; }
		if(a==2) { grupoMarcadores.grupo = 3; grupoMarcadores.name = '2014'; }
		grupoMarcadores.activeItem = 0;

		marcadorUnico.add(mesh1);
		marcadorUnico.add(grupoMarcadores);
	}
}
function addMarcadores(marcador) {
	var soporte, materialSoporte, formaSoporte,mirrorCubeCamera,mirrorCube;
	var marcadoresGeometria, marcadoresMaterial, grupoMarcadores, posIni, posIni2;
		posIni = -350;
		posIni2 = -700;
	
	for (var a = 0; a<12; a++) {
		if (a < 6) marcadoresGeometria = new THREE.BoxGeometry(300,150,10,1,1,1);
		else if (a>=6) marcadoresGeometria = new THREE.BoxGeometry(10,150,300,1,1,1);
		marcadoresMaterial = new THREE.MeshPhongMaterial({
		    	color: 0x767676,
		    	transparent: true,
		    	opacity: 0.6
		    });
		grupoMarcadores = new THREE.Mesh(marcadoresGeometria, marcadoresMaterial);
		if(a<3) grupoMarcadores.position.set(posIni+(350*a),1300,600);
		else if (a>=3 && a<6) grupoMarcadores.position.set(posIni+(350*(a-3)),1300,1650);
		else if (a>=6 && a<9) grupoMarcadores.position.set(-550,1300,780+(350*(a-6)));
		else if (a>=9 && a<12) grupoMarcadores.position.set(550,1300,780+(350*(a-9)));
		if(a==0 || a==5 || a==8 || a==9) grupoMarcadores.grupo = 1;
		if(a==1 || a==4 || a==7 || a==10) grupoMarcadores.grupo = 2;
		if(a==2 || a==3 || a==6 || a==11) grupoMarcadores.grupo = 3;
		grupoMarcadores.activeItem = 0;
		marcador.add(grupoMarcadores);
	}
	formaSoporte = new THREE.BoxGeometry(1080,400,980,1,1);
	materialSoporte = new THREE.MeshPhongMaterial({
		    	color: 0x767676,
				ambient: 0x767676,
				emissive: 0x000000,
				specular: 0xffffff,
				shininess: 100,
		    	transparent: true,
		    	opacity: 1
		    });
	soporte = new THREE.Mesh(formaSoporte, materialSoporte);
	soporte.name='soporte';
	soporte.position.set(posIni+350,1400,1120);
	marcador.add(soporte);
}
function addFechaMarcadores(fechasMarcadores) {	

	for(var i = 0; i<3; i++){

	    var canvas1 = document.createElement('canvas');
		var context1 = canvas1.getContext('2d');
		context1.DoubleSide = true;
		context1.font = "Bold 80px Arial";
		context1.fillStyle = "rgba(255,255,255,0.95)";
	    if(i==0) context1.fillText('2012', 50, 100);
	    if(i==1) context1.fillText('2013', 50, 100);
	    if(i==2) context1.fillText('2014', 50, 100);

		var texture1 = new THREE.Texture(canvas1) 
		texture1.needsUpdate = true;
	      
	    var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide } );
	    material1.transparent = true;

	    var mesh1 = new THREE.Mesh(
	        new THREE.PlaneBufferGeometry(canvas1.width, canvas1.height),
	        material1
	      );
		mesh1.position.set(-350+(350*i),1300,1660);
		fechasMarcadores.add(mesh1);
	}
	for(var i = 0; i<3; i++){

	    var canvas1 = document.createElement('canvas');
		var context1 = canvas1.getContext('2d');
		context1.DoubleSide = true;
		context1.font = "Bold 80px Arial";
		context1.fillStyle = "rgba(255,255,255,0.95)";
	    if(i==0) context1.fillText('2012', 50, 100);
	    if(i==1) context1.fillText('2013', 50, 100);
	    if(i==2) context1.fillText('2014', 50, 100);

		var texture1 = new THREE.Texture(canvas1) 
		texture1.needsUpdate = true;
	      
	    var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide } );
	    material1.transparent = true;

	    var mesh1 = new THREE.Mesh(
	        new THREE.PlaneBufferGeometry(canvas1.width, canvas1.height),
	        material1
	      );
		mesh1.position.set(-560,1300,780+(350*i));
		mesh1.rotation.y = 300;
		fechasMarcadores.add(mesh1);
	}
	for(var i = 0; i<3; i++){

	    var canvas1 = document.createElement('canvas');
		var context1 = canvas1.getContext('2d');
		context1.DoubleSide = true;
		context1.font = "Bold 80px Arial";
		context1.fillStyle = "rgba(255,255,255,0.95)";
	    if(i==0) context1.fillText('2014', 50, 100);
	    if(i==1) context1.fillText('2013', 50, 100);
	    if(i==2) context1.fillText('2012', 50, 100);

		var texture1 = new THREE.Texture(canvas1) 
		texture1.needsUpdate = true;
	      
	    var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide } );
	    material1.transparent = true;

	    var mesh1 = new THREE.Mesh(
	        new THREE.PlaneBufferGeometry(canvas1.width, canvas1.height),
	        material1
	      );
		mesh1.position.set(570,1300,780+(350*i));
		mesh1.rotation.y = 900;
		fechasMarcadores.add(mesh1);
	}
	for(var i = 0; i<3; i++){

	    var canvas1 = document.createElement('canvas');
		var context1 = canvas1.getContext('2d');
		context1.DoubleSide = true;

		context1.font = "Bold 80px Arial";
		context1.fillStyle = "rgba(255,255,255,0.95)";
	    if(i==0) context1.fillText('2014', 50, 100);
	    if(i==1) context1.fillText('2013', 50, 100);
	    if(i==2) context1.fillText('2012', 50, 100);

		var texture1 = new THREE.Texture(canvas1) 
		texture1.needsUpdate = true;
	      
	    var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide } );
	    material1.transparent = true;

	    var mesh1 = new THREE.Mesh(
	        new THREE.PlaneBufferGeometry(canvas1.width, canvas1.height),
	        material1
	      );
		mesh1.position.set(-350+(350*i),1300,590);
		mesh1.rotation.y = 600;
		fechasMarcadores.add(mesh1);
	}

}


function addGraficas(graficas) {
	var barra, barraMaterial, barraInside, margin;
	margin = 80;
	for (var i=0; i<5;i++) {
	    barra = new THREE.BoxGeometry(50, 1, 50, 1, 1, 1);
	    barraMaterial = new THREE.MeshBasicMaterial({
	    	color: 0xD0FA58*(i+1),
	    	transparent: true,
	    	opacity: 1
	    });
	    barraInside = new THREE.Mesh(barra,barraMaterial);
	    barraInside.position.set(0,0,0);

	    graficas.add(barraInside);
	}

}

function addLeyendas(scene, puntos, obj, leyendasGroup) {
	for ( var i = 0; i<puntos.length; i += 1) {
    	var spritey = makeTextSprite( obj.distritosName[i], 
			{ fontsize: 40, borderColor: {r:255, g:0, b:0, a:0}, backgroundColor: {r:255, g:100, b:100, a:0}, color: '#ffffff' } );
		spritey.position.set(puntos[i].point.x+50, obj.amounts[i]+15, puntos[i].point.z);
		leyendasGroup.add( spritey );
		}
}

function addlineas(scene, puntos, obj, id) {
	
for( var i = id; i < (id+1); i += 1) {
	
	var numPoints = 100;
	var puntoX;
	for ( var e = id; e < puntos.length; e += 1 ){
		if (puntos[i].id != puntos[e].id) {
		// ------- PUNTOS
		var particles = new THREE.Geometry();
						particles.vertices.push(new THREE.Vector3(puntos[i].point.x,obj.amounts[i]+5,puntos[i].point.z));
					    particles.vertices.push(new THREE.Vector3(puntos[e].point.x,obj.amounts[e]+5,puntos[e].point.z));

		var pMaterial = new THREE.PointCloudMaterial({
			color: 0xFF0000,
			size: 5,
			blending: THREE.AdditiveBlending,
			transparent: true,
			opacity: 0.3,
			sizeAttenuation: false
		});

	pointCloud = new THREE.PointCloud( particles, pMaterial );

	pointCloud.name = "puntos";

	//scene.add(pointCloud);
	// ---------------
	//  --LINEA CURVA
			if (puntos[i].point.x<0) puntoX = puntos[i].point.x + 10;
			else puntoX = puntos[i].point.x - 10;
			var spline = new THREE.SplineCurve3([
				   new THREE.Vector3(puntos[i].point.x,obj.amounts[i]+5,puntos[i].point.z),
				   new THREE.Vector3(((puntos[i].point.x+puntos[e].point.x)/2)-100, ((obj.amounts[i]+obj.amounts[e])/1.7)+200, (puntos[i].point.z+puntos[e].point.z)/2),
				   new THREE.Vector3(puntos[e].point.x,obj.amounts[e]-10,puntos[e].point.z)
				]);

			var material3 = new THREE.LineBasicMaterial({
				    color: 0xF4351C,
				    transparent:true,
					opacity: 1,
				    //linewidth: Math.floor((Math.random() * 30) + 1)*10*e,
                    linewidth: 1,
					sizeAttenuation: false,
					visible: true
				});
			var material4 = new THREE.LineBasicMaterial({
				    color: 0xF4351C,
				    transparent:true,
					opacity: 0.2,
				    //linewidth: Math.floor((Math.random() * 30) + 1)*10*e,
                    linewidth: 10,
					sizeAttenuation: false,
					visible: true
				});

			var geometry3 = new THREE.Geometry();
			var geometry4 = new THREE.Geometry();
			var splinePoints = spline.getPoints(numPoints);

			for(var o = 0; o < splinePoints.length; o++){
				    geometry3.vertices.push(splinePoints[o]);  
				}
			for(var o = 0; o < splinePoints.length; o++){
				    geometry4.vertices.push(splinePoints[o]);  
				}	

			var line2 = new THREE.Line(geometry3, material3);
			var line3 = new THREE.Line(geometry4, material4);

			line2.name="lineas";
			//line2.rotation.x = Math.PI / 270;
			// ---------------------

			scene.add(line2);
			scene.add(line3);
            //group.children[e].material.color.setHex(0xAEB404*(e));
            //group.children[e].material.emissive.setHex(0xAEB404);
            group2.children[e].material.color.setHex(0xAEB404*2);
            group2.children[e].material.emissive.setHex(0xAEB404*2);
			}
		}
	}
for ( var u = id-1; u>=0; u-- ) { group.children[u].material.emissive.setHex(0x000000); group.children[u].material.opacity = 0.1;
								  group2.children[u].material.emissive.setHex(0x000000); group2.children[u].material.opacity = 0.1;	}
}

function addGeoObject ( group, svgObject ) {
	
	var i,j, len, len1;
	var path, mesh, color, material, amount, simpleShapes, simpleShape, shape3d;
	var thePaths = svgObject.paths;
	var theAmounts = svgObject.amounts;
	var theColors = svgObject.colors;
	var theCenter = svgObject.center;

    //raycaster = new THREE.Raycaster();

	len = thePaths.length;

	for (i = 0; i < len; ++i) {
		path = $d3g.transformSVGPath( thePaths[i] );
		color = new THREE.Color( theColors[i] ); 
		material = new THREE.MeshLambertMaterial({
			color: color,
			ambient: color,
			emissive: color,
            transparent: true,
            opacity: 0.7

		});
		amount = theAmounts[i];
		simpleShapes = path.toShapes(true);

		len1 = simpleShapes.length;

		for (j = 0; j < len1; ++j) {
			simpleShape = simpleShapes[j];
			shape3d = simpleShape.extrude({
				amount: amount,
				bevelEnabled: false
			});

			mesh = new THREE.Mesh(shape3d, material);
			mesh.rotation.x = Math.PI / 2;
			mesh.translateZ( - (amount) - 1);
			mesh.translateX( - theCenter.x);
			mesh.translateY( - theCenter.y);
			mesh.scale.x = 20;
			mesh.scale.y = 20;
			mesh.verticesNeedUpdate = true;
            
			group.add(mesh);
		}
	}
    
};
function addGeoObject2 ( group, svgObject ) {
	
	var i,j, len, len1;
	var path, mesh, color, material, amount, simpleShapes, simpleShape, shape3d;
	var thePaths = svgObject.paths;
	var theAmounts = svgObject.amounts;
	var theColors = svgObject.colors;
	var theCenter = svgObject.center2;

    //raycaster = new THREE.Raycaster();

	len = thePaths.length;

	for (i = 0; i < len; ++i) {
		path = $d3g.transformSVGPath( thePaths[i] );
		color = new THREE.Color( theColors[i] ); 

		var material1 = new THREE.MeshPhongMaterial({
			color: color,
			ambient: 0x000000,
			emissive: 0x767676,
			specular: 0xbdbdbd,
			shininess: 10,
            transparent: true,
            opacity: 0.9  
		});

		//var material1 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/textures/text21.jpg') } );

		amount = 10;
		var altura = theAmounts[i];
		simpleShapes = path.toShapes(true);

		len1 = simpleShapes.length;

		for (j = 0; j < len1; ++j) {
			simpleShape = simpleShapes[j];
			shape3d = simpleShape.extrude({
				amount: amount,
				bevelEnabled: false
			});

			mesh = new THREE.Mesh(shape3d, material1);
			mesh.rotation.x = Math.PI / 2;
			mesh.translateZ( - (altura) - 10);
			mesh.translateX( - theCenter.x);
			mesh.translateY( - theCenter.y);
			mesh.scale.x = 20;
			mesh.scale.y = 20;
            
			group2.add(mesh);
		}
	}
    
};
