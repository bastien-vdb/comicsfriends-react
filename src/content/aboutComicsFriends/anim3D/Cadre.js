import React, {useRef} from 'react';

import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, TextureLoader } from "react";
import { OrbitControls, Stars, Float, useScroll, Image, useTexture} from '@react-three/drei';

import { Html, useProgress } from '@react-three/drei';

export default function Cadre() {
        const ref = useRef();

        const colorMap = useLoader(TextureLoader, 'white_comicsfriends_logo-min.png')
        
        return (
            <mesh rotation={[3,3,0]} position={[2,0,0]}>
                <boxGeometry />
                <meshStandardMaterial color='black' map={colorMap}/>
            </mesh>
        )
}