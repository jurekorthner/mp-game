var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);


document.body.appendChild(renderer.domElement);

// -----------------

const earthMaterial = createEarthMaterial();
var sphereGeometry = new THREE.SphereGeometry(10, 10, 10);

// -------------------

let meshes = [10];

var middle;

for (var k = 0; k < 10; k++) {
    for (var i = 0; i < 10; i++) {
        var m = new THREE.Mesh(sphereGeometry, createEarthMaterial());
        m.position.z = i * -30;
        m.position.x = k * -30;
        if(i == 5 && k == 5) {
            middle = m;
        }
        scene.add(m)
    }
}

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 250;
camera.position.y = 250;
camera.lookAt(m.position);

// ----------------

scene.add(camera)

function createEarthMaterial() {
    var earthTexture = new THREE.TextureLoader().load('assets/earth.jpg');

    var earthMaterial = new THREE.MeshBasicMaterial({
        map: earthTexture
    });

    return earthMaterial;
}

// ----------------

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();