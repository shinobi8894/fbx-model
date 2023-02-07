import logo from './logo.svg';
import './App.css';
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls, useTexture, useFBX } from "@react-three/drei";
import { Suspense } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three';

function Scene() {
  const fbx = useFBX("SkullDagger3PartLP.fbx");
  const colorMap = useLoader(TextureLoader, 'ALL_default_BaseColor.png');
  fbx.traverse(function (child) {
    if (child instanceof THREE.Mesh) {
        child.material.map = colorMap
        child.material.needsUpdate = true;
    }
});

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        <primitive object={fbx} scale={0.05}/>
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
}

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
