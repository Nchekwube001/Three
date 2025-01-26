import * as THREE from "three";

const scene = new THREE.Scene();
// Creating a visible object is called a mesh

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "green" });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// After adding the mesh create a camera view for the POV
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 1;
scene.add(camera);

//Renderer
const canvas: HTMLCanvasElement = document.querySelector(".webgl");
console.log({
  canvas,
});

const renderer = new THREE.WebGLRenderer({
  canvas,
});
console.log({
  renderer,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
