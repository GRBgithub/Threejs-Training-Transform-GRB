import React from "react";
import * as THREE from "three";
import styled from "styled-components";
import { gsap } from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
/* eslint import/no-webpack-loader-syntax: off */
import * as fragment from "!raw-loader!glslify-loader!./shader/fragment.glsl";
/* eslint import/no-webpack-loader-syntax: off */
import * as vertex from "!raw-loader!glslify-loader!./shader/vertex.glsl";


import water from "../../../../assets/img/water.jpeg";
const Threejs = () => {
  React.useEffect(() => {
    ThreejsStart();
  }, []);

    const ThreejsStart = () => {
    const canvas = document.querySelector('canvas.webgl');

    // Scene
    const axesHelper = new THREE.AxesHelper();
    const scene = new THREE.Scene();
     scene.add(axesHelper);
    /**
     * Objects
     */
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    // const mesh = new THREE.Mesh(geometry, material);
    // scene.add(mesh);
    // mesh.position.x=0.7;
    // mesh.position.y= -0.6;
    // mesh.position.z=1;
    // console.log(mesh.position.length()); // position de l'objet depuis le centre
    // mesh.position.normalize();// change la position to 1 
    // // mesh.position.set(0.8,0.4,1);// change la position de l'objet
    // mesh.scale.set(2,0.5,0.5);// modify the size of the object x y z
    // mesh.rotation.reorder("YXZ");// reorder axe pour savoir lequel des rotations est appelé
    // mesh.rotation.y = Math.PI * 0.25 ;
    // mesh.rotation.x = Math.PI *0.25;

    // // PI = VALEUR PERMETTANT DE FAIRE UN MOITIER DE ROTATION D'ELEMENT

    const group = new THREE.Group();
    scene.add(group);

    const cube1 = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshBasicMaterial({color:"red"})
    );
    group.add(cube1);
    const cube2 = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshBasicMaterial({color:"green"})
    );
    cube2.position.x = 2;
    group.add(cube2);
    const cube3 = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshBasicMaterial({color:"blue"})
    );
    cube3.position.x = -2;
    group.add(cube3);
    
    group.rotation.y=1
    
    /**
     * Sizes
     */
    const sizes = {
        width: 800,
        height: 600
    }

    /**
     * Camera
     */
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);
    // console.log(mesh.position.distanceTo(camera.position)); //position de l'objet par rapport a un autre ou un vector3
    // camera.lookAt(mesh.position);
    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
  };
  return (
    <Container>
      <canvas className="webgl"></canvas>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export default Threejs;
