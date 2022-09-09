import React, {useRef} from 'react';

import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from "react";
import { OrbitControls, Stars, Float, useScroll} from '@react-three/drei';

import { Html, useProgress } from '@react-three/drei';

export default function Museum () {
    const epiccomic = useLoader(GLTFLoader, 'art_gallery/scene.gltf');
    const Museum = useRef();
  
    return (
      <Suspense fallback={null}>
        <primitive ref={Museum} position={[0,-10,0]} object={epiccomic.scene} scale={1} />
      </Suspense>
    )
  }