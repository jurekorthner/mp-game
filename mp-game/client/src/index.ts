import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import backImg from "./assets/skybox/back.png";
import bottomImg from "./assets/skybox/bottom.png";
import frontImg from "./assets/skybox/front.png";
import leftImg from "./assets/skybox/left.png";
import rightImg from "./assets/skybox/right.png";
import topImg from "./assets/skybox/top.png";

// --------------
import spaceshipModel from "./assets/models/spaceship.glb";
import { MaterialParameters, Mesh, MeshPhysicalMaterial, MeshStandardMaterial, TextureLoader } from "three";

/////////////////////////////////////////////////////////////
const renderer: THREE.Renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
////////////////////////////////////////////////////////////

const scene: THREE.Scene = new THREE.Scene();

const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 0)
camera.position.z = 2

const light: THREE.AmbientLight = new THREE.AmbientLight(0xeeeeee, 2);
scene.add(light);


renderer.domElement.style.padding = "0";
renderer.domElement.style.margin = "0";
document.body.style.padding = "0";
document.body.style.margin = "0";

const controls = new OrbitControls(camera, renderer.domElement)

// -----------------------------

 
const cubeTextureLoader = new THREE.CubeTextureLoader();
const texture = cubeTextureLoader.load([
    rightImg,
    leftImg,
    topImg,
    bottomImg,
    frontImg,
    backImg,
]);

scene.background = texture;

// --------------------------

const txLoader: TextureLoader = new THREE.TextureLoader();
const gltfLoader: GLTFLoader = new GLTFLoader();

// load a resource
/*
gltfLoader.load(foxModel,
    function (gltf) {
        let mesh: Mesh = gltf.scene.children[0] as Mesh;

        console.log(mesh.material)
        let mat = mesh.material as THREE.MeshStandardMaterial;


        scene.add(gltf.scene);
        console.log('test');


    }, undefined, function (error) {

        console.error(error);

    });

*/
// --------------------

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    controls.update();

    render();
}

function render() {
    renderer.render(scene, camera)
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
}
animate()

