import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Anim3D4() {

    const canvas = useRef(null);
    const loader = new GLTFLoader();

    useEffect(()=>{
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        const camera = new  THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvas.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        camera.position.z = 4;

        let scrollY = window.scrollY;
        
        const loader = new GLTFLoader();

        loader.load( './3d_star_trek_comic.glb', function ( gltf ) {
            gltf.scene.position.y = -2;
            gltf.scene.position.x = 0;
            gltf.scene.rotation.y = -0.74;
            scene.add( gltf.scene );
            
            let switchLeft = false;

            const canvasSize = canvas.current.offsetHeight;
            console.log(canvasSize);

            let scrollUpOrDown = window.scrollY;
            window.addEventListener('scroll', ()=>{
                console.log(canvas.current.getBoundingClientRect().top);
                if (canvas.current.getBoundingClientRect().top < canvasSize/2 && canvas.current.getBoundingClientRect().top > -canvasSize/2) {
                    if (window.scrollY > scrollUpOrDown) {
                        gltf.scene.rotation.y += window.scrollY/400000;
                        camera.position.z-= window.scrollY/50000;
                        scrollUpOrDown = window.scrollY;
                    }
                    else {
                        gltf.scene.rotation.y -= window.scrollY/400000;
                        camera.position.z+= window.scrollY/50000;
                        scrollUpOrDown = window.scrollY;
                    }
                }

            })

            // if (switchLeft) {
            //     if (gltf.scene.rotation.y < 0.75) {
            //         gltf.scene.rotation.y += window.scrollY/400000;
            //         camera.position.z-= window.scrollY/50000;
            //     }
            //     else {
            //         switchLeft = false;
            //     }
            // }
            // else {
            //     if (gltf.scene.rotation.y > -0.75) {
            //         gltf.scene.rotation.y -= window.scrollY/400000;
            //         camera.position.z+= window.scrollY/50000;
            //     }
            //     else {
            //         switchLeft = true;
            //     }
            // }
            

        }, undefined, function ( error ) {

            console.error( error );
        } );

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        return ()=>canvas.current.removeChild(renderer.domElement);
    },[])

    return (
        <div ref={canvas}>

        </div>
    )
}