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
const ShaderPattern = () => {
  React.useEffect(() => {
    ThreejsStart();
  }, []);

  const ThreejsStart = () => {
    // +-------------------------------------------------------------------+
    // |  CANVAS INIT
    // +-------------------------------------------------------------------+
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const aspectRatio = sizes.width / sizes.height;
    const canvas = document.querySelector(".webgl");
    const scene = new THREE.Scene();
    // +-------------------------------------------------------------------+
    // | Textures
    // +-------------------------------------------------------------------+
    const textureLoader = new THREE.TextureLoader();
    const waterTexture = textureLoader.load(water);
    // +-------------------------------------------------------------------+
    // |  DEBUG PARAMETER
    // +-------------------------------------------------------------------+
    const Parameters = {
      color: 0xffff00,
      spin: () => {
        gsap.to(mesh.rotation, {
          y: mesh.rotation.y + Math.PI * 2,
          duration: 1,
        });
      },
    };
    // +-------------------------------------------------------------------+
    // |  Shader
    // +-------------------------------------------------------------------+
    const Shadermaterial = new THREE.RawShaderMaterial({
      vertexShader: vertex.default,
      fragmentShader: fragment.default,
      uniforms: {
      
      },
      side: THREE.DoubleSide,
      transparent: true,
    });


    // +-------------------------------------------------------------------+
    // |  OBJECT
    // +-------------------------------------------------------------------+

    const geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: Parameters.color,
      wireframe: false,
      side: THREE.DoubleSide,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, Shadermaterial);
    mesh.position.y = 1;
    scene.add(mesh);



    // +-------------------------------------------------------------------+
    // |  Lights
    // +-------------------------------------------------------------------+
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(1024, 1024);
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.camera.left = -7;
    directionalLight.shadow.camera.top = 7;
    directionalLight.shadow.camera.right = 7;
    directionalLight.shadow.camera.bottom = -7;
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // +-------------------------------------------------------------------+
    // |  CAMERA
    // +-------------------------------------------------------------------+
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
    camera.position.z = 4;
    camera.position.y = 1;
    camera.lookAt(mesh.position);
    scene.add(camera);

    // +-------------------------------------------------------------------+
    // |  CONTROLS RENDER
    // +-------------------------------------------------------------------+
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // +-------------------------------------------------------------------+
    // |  REZIZE
    // +-------------------------------------------------------------------+
    window.addEventListener("resize", (e) => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // +-------------------------------------------------------------------+
    // |  DEBUG
    // +-------------------------------------------------------------------+
    const gui = new dat.GUI({ closed: true });

    // +-------------------------------------------------------------------+
    // |  FRAME ACTION
    // +-------------------------------------------------------------------+
    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();
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
export default ShaderPattern;
