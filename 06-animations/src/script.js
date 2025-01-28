import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animations
let prevTime = Date.now();

const clock = new THREE.Clock();

gsap.to(mesh.position, { duration: 1, x: 2, delay: 1 });
gsap.to(mesh.position, { duration: 1, x: 0, delay: 2 });
const tock = () => {
  //TIme duration
  const currentTime = Date.now();
  const deltaTime = currentTime - prevTime;
  prevTime = currentTime;
  const elapsedTime = clock.getElapsedTime();
  //   console.log({ elapsedTime });

  //Update Objects
  //   mesh.position.x += 0.001 * deltaTime;
  //   mesh.position.y += 0.001 * deltaTime;
  //   mesh.rotation.y = Math.sin(elapsedTime);
  //   mesh.rotation.x = Math.cos(elapsedTime);
  //   mesh.position.y = Math.sin(elapsedTime);
  //   mesh.position.x = Math.cos(elapsedTime);
  //   camera.lookAt(mesh.position);
  //   mesh.rotation.y += 0.001 * deltaTime;

  //Renderere
  renderer.render(scene, camera);

  window.requestAnimationFrame(tock);
};
tock();
