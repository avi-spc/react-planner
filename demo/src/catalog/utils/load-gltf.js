import * as THREE from 'three';


import GLTFLoader from "./gltf-loader";
import DRACOLoader from "./draco-loader";

export function loadGltf(gltfFile) {
  const manager = new THREE.LoadingManager();
  const loader = new GLTFLoader(manager);

  // Optional: Provide a DRACOLoader instance to decode compressed mesh data
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  return new Promise((resolve, reject) => {

    loader.load(
      // resource URL
      gltfFile,
      // called when the resource is loaded
      function (gltf) {
        return resolve (gltf); // Object
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log(error);
      }
    );
  });

  // Load a glTF resource
  loader.load(
    // resource URL
    gltfFile,
    // called when the resource is loaded
    function (gltf) {
      scene.add(gltf.scene);

      gltf.animations; // Array<THREE.AnimationClip>
      gltf.scene; // THREE.Group
      gltf.scenes; // Array<THREE.Group>
      gltf.cameras; // Array<THREE.Camera>
      gltf.asset; // Object
    },
    // called while loading is progressing
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
      console.log("An error happened");
    }
  );
}
