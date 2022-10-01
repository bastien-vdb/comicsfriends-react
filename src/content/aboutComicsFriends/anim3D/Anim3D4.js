import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Anim3D4() {

    const canvas = useRef(null);
    const loader = new GLTFLoader();

    useEffect(()=>{
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color(0xffffff,0);
        const camera = new  THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvas.current.appendChild(renderer.domElement);
        camera.position.z = 4;
        
        const loader = new GLTFLoader();

        loader.load( './3d_star_trek_comic.glb', function ( gltf ) {
            gltf.scene.position.y = -2;
            gltf.scene.position.x = 0;
            gltf.scene.rotation.y = -0.74;
            scene.add( gltf.scene );

            const canvasSize = canvas.current.offsetHeight;

            // linear interpolation function
            function lerp(a, b, t) {
                return ((1 - t) * a + t * b);
            }

            window.addEventListener('scroll', ()=>{
                if (canvas.current.getBoundingClientRect().top < canvasSize/2 && canvas.current.getBoundingClientRect().top > -canvasSize/2) {
                    let clientRect = (canvasSize/2)-canvas.current.getBoundingClientRect().top;
                    let ratio = clientRect/canvasSize;

                    camera.position.z = lerp(4, 2, ratio);
                    gltf.scene.rotation.y = lerp(-0.74,0.74,ratio);
                    gltf.scene.position.y = lerp(-2,-3,ratio);
                }
            })
            

        }, undefined, function ( error ) {

            console.error( error );
        } );

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', ()=>{
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        })
        animate();

        return ()=>canvas.current.removeChild(renderer.domElement);
    },[])

    return (
        <div style={{width:'100%', display:'flex'}} ref={canvas}>

        </div>
    )
}