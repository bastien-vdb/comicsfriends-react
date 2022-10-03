import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Camera } from 'three';

export default function Anim3D_white_gal() {

    const canvas = useRef(null);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight/2, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true });
    renderer.setSize(window.innerWidth, window.innerHeight*3);
    
    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableZoom = false;
    // controls.enableRotate = false;
    controls.enabled = false;
    controls.update();

    useEffect(()=>{
        canvas.current.appendChild(renderer.domElement);

        camera.position.z = 2;
        camera.position.x = 0;
        camera.position.y = 3;

        /********************** */
        const manager = new THREE.LoadingManager();
        manager.onStart = function ( url, itemsLoaded, itemsTotal ) {

            console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

        };

        manager.onLoad = function ( ) {

            console.log( 'Loading complete!');

        };


        manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {

            console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

        };

        manager.onError = function ( url ) {

            console.log( 'There was an error loading ' + url );

        };
        /********************* */

        const loader = new GLTFLoader(manager);

        loader.load('./vr_gallery.glb', (gltf)=>{
            gltf.scene.position.x = 0;
            gltf.scene.position.y = -3;
            gltf.scene.rotation.y = 0;
            scene.add(gltf.scene);

            window.addEventListener('scroll', ()=>{

                if (canvas.current.getBoundingClientRect().top > -elementSize) {
                    let heightFromTop = -canvas.current.getBoundingClientRect().top; 
                    const level = heightFromTop/elementSize;
                    
                    let lerpResult =
                    lerp(0,-5,level);
                    camera.position.x = -(Math.PI/1.5*(lerpResult))*2;

                    //object go down
                    let lerpResultDown = lerp(-3,5,level);
                    gltf.scene.position.y = lerpResultDown;
                }
            })
        })

        let elementSize = canvas.current.offsetHeight;
            
        function lerp(a,b,t) {
            return ((1 - t) * a + t * b);
        }

        function animate() {
            requestAnimationFrame(animate);
            // required if controls.enableDamping or controls.autoRotate are set to true
	        controls.update();
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', ()=>{
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight*2);
        })

        
            animate();
            return ()=>canvas.current.removeChild(renderer.domElement);
    },[])

    

    return (
        <div style={{height:'200vh'}} ref={canvas}>
            <h1 style={{position:'absolute'}} className='mt-40 text-6xl p-4 md:mt-80 md:text-8xl md:p-12 lg:mt-80 lg:text-9xl lg:p-32'>Comics friends museum</h1>
            <div style={{height:'200vh', width:'100%', position:'fixed'}}>
            </div>
        </div>
    )
}