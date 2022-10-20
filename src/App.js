import React, { Component } from "react";
import * as THREE from "three";

import Background from "./assets/background_space.jpg";
import EarthText from "./assets/texture_earth.jpg";
class App extends Component {

  componentDidMount() {

    const scene = new THREE.Scene();
    scene.background = new THREE.TextureLoader().load(Background);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    // ADD PLANET EARTH
    const textureEarth = new THREE.TextureLoader().load(EarthText);
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshLambertMaterial({ map: textureEarth });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // ADD LIGHTS
    const light = new THREE.PointLight(0xffffff, 1.5);
    light.position.set(1, 2, 3);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xafafaf, 0.15));

    const animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }


  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}
export default App;