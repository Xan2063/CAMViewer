﻿


// import the proto format

var ProtoBuf = dcodeIO.ProtoBuf;
var builder = ProtoBuf.newBuilder({ convertFieldsToCamelCase: true });
ProtoBuf.loadProtoFile("messages/Features.proto", builder);

var root = builder.build();
var tutorial = root.tutorial;

    var Mesh = tutorial.TsMeshSerializable,
    Vector = tutorial.TsVectorSerializable;










if (!Detector.webgl) Detector.addGetWebGLMessage();

var container, stats;

var camera, cameraTarget, scene, renderer, controls, clock;

var mouse = new THREE.Vector2();
var currentIntersected, raycaster, sphereInter;

var featureGraphics;

init();
animate();

function init() {

    container = document.createElement('div');
    document.body.appendChild(container);
    

    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 10000);

    camera.position.set(50, 0, 0);
    //camera.lookAt(5, 5, 5);
    //camera.position.x = 200;

    scene = new THREE.Scene();
    //scene.fog = new THREE.Fog( 0x72645b, 2, 15 );

    clock = new THREE.Clock();
    controls = new THREE.FirstPersonControls(camera);
    controls.zoomSpeed = 5;
    controls.activeLook = true;
    controls.lookSpeed = 0.1;
    controls.movementSpeed = 200;
    controls.noFly = true;
    controls.lookVertical = true;
    //controls.constrainVertical = true;
    //controls.verticalMin = 1.0;
    //controls.verticalMax = 2.0;
    controls.lon = -150;
    controls.lat = 120;




    // Collisions
    raycaster = new THREE.Raycaster();
    raycaster.linePrecision = 0.1;
    document.addEventListener('mousemove', $.throttle (250,onDocumentMouseMove), false);
    //document.addEventListener('mousemove',  onDocumentMouseMove, false);
    var geometry = new THREE.SphereGeometry(5);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    sphereInter = new THREE.Mesh(geometry, material);
    sphereInter.visible = false;
    scene.add(sphereInter);

    






    // get features from service
    $.get("http://localhost:8080/sampleFiles/Features.xml", function (data) {
    //$.get("http://localhost:8080/sampleFiles/Features_Waschkorb.xml", function (data) {
    //$.get("http://localhost:8080/workpieceService/Features", function (data) {

        var base64string = data.firstChild.textContent;
        var yourMessage = builder.build("tutorial.TcWorkpieceSerializationModel");
        var workpieceSerializationModel = yourMessage.decode(base64string);
        var featureCount = workpieceSerializationModel.Features.length;
        var allFeatures = new THREE.Geometry();
        for (let i = 0; i < featureCount; i++) {
            var feature = workpieceSerializationModel.Features[i];

            let featureGeometry;
            if (feature.feature === "CircularHole") {
                var hole = feature.CircularHole;
                featureGeometry = drawHole(hole);

            }
            if (feature.feature === "CuttingContour") {
                var cuttingContour = feature.CuttingContour;
                featureGeometry= drawContour(cuttingContour);

            }
            if (featureGeometry !== undefined) {
                allFeatures.merge(featureGeometry);
                // TODO merge correctly here
                //allFeatures = THREE.GeometryUtils.merge(allFeatures, featureGeometry);
            }
            
        }
        featureGraphics = new THREE.LineSegments(allFeatures, new THREE.MeshBasicMaterial({ color: 0x000000 }));
        scene.add(featureGraphics);

    });

   

    function drawHole(hole) {
        var circleRadius = hole.Radius;
        var shape = new THREE.Shape();

        shape.moveTo(circleRadius, 0);
        shape.absarc(0, 0, circleRadius, 0, 2 * Math.PI, false);
        var rectGeom = new THREE.ShapeGeometry(shape);
        var pose = hole.CenterPoint.Elements;
        //rectGeom.translateX(pose[12]);
        //rectGeom.translateY(pose[13]);
        //rectGeom.translateZ(pose[14]);
        return rectGeom;
        var circHoleMesh = new THREE.Line(rectGeom, new THREE.MeshBasicMaterial({ color: 0x000000 }));


        //circHoleMesh.position = new THREE.Vector3(pose[12] , pose[13] , pose[14]);

        // TODO positioning of circular holes missing
        circHoleMesh.translateX(pose[12]);
        circHoleMesh.translateY(pose[13]);
        circHoleMesh.translateZ(pose[14]);

        //circHoleMesh.translate(pose[12], pose[13], pose[14]);
        scene.add(circHoleMesh);
    }

    function drawContour(contour) {
        var geometry = new THREE.Geometry();
        var segments = contour.Contour.Segments;
        for (let segmentIndex = 0; segmentIndex < segments.length; segmentIndex++) {

            var segment = segments[segmentIndex].SplineSegment;
            
            
            for (let i = 1; i < segment.doublePoseTuple.length; i++) {
                var prevtuple = segment.doublePoseTuple[i-1];
                var prevpose = prevtuple.pose.Elements;
                geometry.vertices.push(new THREE.Vector3(prevpose[12], prevpose[13], prevpose[14]));

                var tuple = segment.doublePoseTuple[i];
                var pose = tuple.pose.Elements;
                geometry.vertices.push(new THREE.Vector3(pose[12], pose[13], pose[14]));

                var origin = new THREE.Vector3(pose[12], pose[13], pose[14])
                geometry.vertices.push(new THREE.Vector3(pose[12], pose[13], pose[14]));

                var vectordir = new THREE.Vector3(pose[8], pose[9], pose[10]);
                var normelizedvec= vectordir.normalize().multiplyScalar(2);
                var resultvec = origin.add(normelizedvec);
                geometry.vertices.push(resultvec);

            }
        }
        return geometry;
        var line = new THREE.Line(geometry, new THREE.MeshBasicMaterial({ color: 0x000000 }));
        scene.add(line);


        //geometry.vertices.push(new THREE.Vector3(pose[12], pose[13], pose[14]));
        //geometry.vertices.push(new THREE.Vector3(10, 0, 0));
    }

   
    // get mesh from service
    $.get("http://localhost:8080/sampleFiles/MeshBin.xml", function (data) {
    //$.get("http://localhost:8080/sampleFiles/MeshBin_Waschkorb.xml", function (data) {
    //$.get("http://localhost:8080/workpieceService/MeshBin", function (data) {
        console.log(data);
        var base64string = data.firstChild.textContent;
        var yourMessage = builder.build("tutorial.TsMeshSerializable");
        var serializedMesh = yourMessage.decode64(base64string);
        var geometry = new THREE.Geometry();
        var vertexCount = serializedMesh.Vertices.length;
        for (let i = 0; i < vertexCount; i++) {
            let vertex = serializedMesh.Vertices[i];
            geometry.vertices.push(new THREE.Vector3(vertex.X, vertex.Y, vertex.Z));
        }

        var facesCount = serializedMesh.Indices.length / 3;

        for (let i = 0; i < facesCount; i++) {
            var index = i * 3;
            var face = new THREE.Face3(serializedMesh.Indices[index],
                serializedMesh.Indices[index + 1],
                serializedMesh.Indices[index + 2]);
            geometry.faces.push(face);
        }
        geometry.computeBoundingBox();
        var material = new THREE.MeshLambertMaterial({ color: 0xff5555, side: THREE.DoubleSide });
      
        //geometry.center();
        var mesh = new THREE.Mesh(geometry, material);
        //var mesh = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial({ side: THREE.DoubleSide }));
       // mesh.position.x = 0;
        //mesh.position.y = 0;
        scene.add(mesh);



        // try to point the camera into the direction of the mesh
        var bb = mesh.geometry.boundingBox;
        var lookVector = bb.max.clone().add(bb.min).multiplyScalar(0.5);
        controls.setCamera(lookVector);

    });
    

    scene.add(new THREE.AmbientLight(0xffffff));
    //scene.add(new THREE.HemisphereLight(0xffffff, 0xffffff));
    addShadowedLight(1, 1, 1, 0xffffff, 1.35);
    //addShadowedLight(0.5, 1, -1, 0xffffff, 1);

    // renderer



    renderer = new THREE.WebGLRenderer({ antialias: false, precision: 'highp', preserveDrawingBuffer :false});
    renderer.setClearColor(0xffffff);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    //renderer.gammaInput = true;
    //renderer.gammaOutput = true;

    //renderer.shadowMapEnabled = true;
    //renderer.shadowMapCullFace = THREE.CullFaceBack;

    container.appendChild(renderer.domElement);

    // stats

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    container.appendChild(stats.domElement);

    //

    window.addEventListener('resize', onWindowResize, false);

}

function onDocumentMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    checkCollisions();

}



function addShadowedLight(x, y, z, color, intensity) {

    var directionalLight = new THREE.DirectionalLight(color, intensity);
    directionalLight.position.set(x, y, z);
    scene.add(directionalLight);

    directionalLight.castShadow = true;
    // directionalLight.shadowCameraVisible = true;

    var d = 1;
    directionalLight.shadowCameraLeft = -d;
    directionalLight.shadowCameraRight = d;
    directionalLight.shadowCameraTop = d;
    directionalLight.shadowCameraBottom = -d;

    directionalLight.shadowCameraNear = 1;
    directionalLight.shadowCameraFar = 4;

    directionalLight.shadowMapWidth = 1024;
    directionalLight.shadowMapHeight = 1024;

    directionalLight.shadowBias = -0.005;
    directionalLight.shadowDarkness = 0.15;

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function animate() {

    requestAnimationFrame(animate);
    var delta = clock.getDelta();
    controls.update(delta);
    render();


}

var collisionline;
var originalColor;
var currentIndex;
function checkCollisions() {
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObject(scene, true);
    if (intersects.length > 0) {
        if (currentIntersected !== undefined) {

            let previousType = currentIntersected.type;
            if (previousType === 'Mesh') {
                if (currentIntersected === intersects[0].object) return;
                currentIntersected.material.color = originalColor;
            }
           
            
            if (previousType === 'LineSegments') {

                scene.remove(collisionline);
                collisionline = null;
            }
        }

        

        currentIntersected = intersects[0].object;
        
        var type = currentIntersected.type;

        if (type === 'Mesh') {
            originalColor = currentIntersected.material.color;
            currentIntersected.material.color = new THREE.Color(0, 0xFF, 0);
        }
        if (type === 'LineSegments') {
            currentIndex = intersects[0].index;
            var line = new THREE.Geometry();
            //line.vertices.push(currentIntersected.geometry.vertices[index]);
            //line.vertices.push(currentIntersected.geometry.vertices[index - 1]);
            line.vertices.push(currentIntersected.geometry.vertices[currentIndex]);
            line.vertices.push(currentIntersected.geometry.vertices[currentIndex + 1]);

            collisionline = new THREE.LineSegments(line, new THREE.MeshBasicMaterial({ color: 0x00FF00, wireframeLinewidth: 5 }));
            collisionline.lineWidth = 15;
            scene.add(collisionline);
            //currentIntersected.material.linewidth = 15;
            currentIntersected.material.color = new THREE.Color(0, 0, 0);
        }
        
        //sphereInter.visible = true;
        //sphereInter.position.copy(intersects[0].point);
    } else {
        if (currentIntersected !== undefined) {
            let previousType = currentIntersected.type;
            if (previousType === 'Mesh') {
                currentIntersected.material.color = originalColor;
            }
            //currentIntersected.material.color = new THREE.Color(0, 0, 0);
            //currentIntersected.material.linewidth = 1;
            if (collisionline !== null) {
                scene.remove(collisionline);
            }
        }
        currentIntersected = undefined;
        
        //sphereInter.visible = false;
    }
}

function render() {

    var timer = Date.now() * 0.0005;


    



    renderer.render(scene, camera);
    stats.update();

}