import React from 'react';

import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useEffect } from "react";
import { OrbitControls, Stars, Float, ScrollControls, Scroll } from '@react-three/drei';

  function Mesh2() {
    const epiccomic = useLoader(GLTFLoader, 'epiccomic/scene.gltf');
    return (
      <Suspense fallback={null}>
        <primitive object={epiccomic.scene} position={-0.5} scale={0.025} />
      </Suspense>
    )
  }

function Anim3D2(props) {
    return (
        <div style={{height:'100vh'}}>
            <Canvas>
                <Stars/>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={6}/>
                <spotLight position={[10,15,10]} angle={0.3} />
                <Float speed={5} rotationIntensity={1} floatIntensity={10}>
                    <Mesh2/>
                </Float>
        </Canvas>
        </div>
    );
}

export default Anim3D2;