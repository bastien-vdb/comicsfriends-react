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
        <div className='Anim3D2' style={{height:'100vh', backgroundColor:'#124265'}}>
            <Canvas>
                <Stars radius={50} depth={50} count={10000} factor={4} saturation={0} fade speed={1} />
                <OrbitControls 
                enableZoom={false} 
                autoRotate={true}
                autoRotateSpeed={1}
                 />
                <ambientLight intensity={0.01}/>
                <spotLight position={[10,15,10]} angle={0.3} />
                <Float speed={5} rotationIntensity={1} floatIntensity={10}>
                  <Suspense fallback={<Loader />}>
                  </Suspense>
                </Float>
        </Canvas>
        <img id='logoCanva' src="ComicsFriends_blanc_fondtransparent.png" alt="ComicsFriends white logo"/>
        </div>
    );
}

export default Anim3D2;