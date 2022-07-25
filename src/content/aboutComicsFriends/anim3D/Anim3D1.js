import React from 'react';

import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useEffect } from "react";
import { OrbitControls, Stars, Float, ScrollControls, Scroll } from '@react-three/drei';

import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function Scene() {
    const comicImg = useLoader(GLTFLoader, 'storybook/scene.gltf');
    return (
      <Suspense>
        <primitive object={comicImg.scene} position={0} scale={1} />
      </Suspense>
    )
  }

function Anim3D1(props) {
    return (
        <div style={{height:'100vh'}}>
            <Canvas>
                <Stars/>
                <OrbitControls enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={4}
                />
                <ambientLight intensity={1}/>
                <spotLight position={[0,100,0]} angle={0.3} />
                <Float speed={5} rotationIntensity={1} floatIntensity={10}>
                <Suspense fallback={<Loader />}>
                    <Scene/>
                </Suspense>
                </Float>
        </Canvas>
        </div>
    );
}

export default Anim3D1;