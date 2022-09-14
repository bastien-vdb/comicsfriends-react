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
        camera.position.z = 3;

        let scrollY = window.scrollY;
        // window.addEventListener('scroll', ()=>{
        //     mesh.rotation.x = window.scrollY/window.innerWidth*5;
        //     mesh.rotation.y = window.scrollY/window.innerWidth*5;

        //     if (window.scrollY > scrollY) {
        //         camera.position.z += window.scrollY/window.innerHeight;
        //         camera.position.y += window.scrollY/window.innerWidth;
        //         console.log("up:"+window.scrollY/window.innerWidth);
        //     }
        //     else if (window.scrollY < scrollY) {
        //         camera.position.z -= window.scrollY/window.innerHeight;
        //         camera.position.y -= window.scrollY/window.innerWidth;
        //         console.log("down:"+window.scrollY/window.innerWidth);
        //     }
        //     scrollY = window.scrollY;
        // })

        /**** */
        const loader = new GLTFLoader();

        loader.load( './3d_star_trek_comic.glb', function ( gltf ) {
            gltf.scene.position.y = -1.5;
            scene.add( gltf.scene );
            window.addEventListener('scroll', ()=>{
                gltf.scene.rotation.y += 0.01;
            })

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