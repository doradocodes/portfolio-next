'use client'

import {useRef, useState} from "react";
import {Canvas as ThreeCanvas, useFrame} from "@react-three/fiber";
import {OrbitControls, OrthographicCamera, useGLTF, useTexture} from "@react-three/drei";


export default function ThreeDComponent() {
    const containerRef = useRef();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1; // Normalize to [-1, 1]
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1; // Normalize to [-1, 1]

        setMousePosition({ x, y });
    };

    return (
        <div
            ref={containerRef}
            // onMouseMove={(e) => handleMouseMove(e)}
        >
            <ThreeCanvas style={{ height: '60vh'}}>
                <Scene mousePosition={mousePosition}/>
            </ThreeCanvas>
        </div>
    );
}

function Scene({ mousePosition }) {
    const meshRef = useRef();

    // useFrame(() => {
    //     if (meshRef.current) {
    //         let targetX = mousePosition.y * Math.PI * 0.1; // Limit to ±0.1 * Math.PI
    //         let targetY = mousePosition.x * Math.PI * 0.1; // Limit to ±0.1 * Math.PI
    //
    //         meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.1;
    //         meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.1;
    //
    //         // Clamp rotation values
    //         meshRef.current.rotation.x = Math.max(-Math.PI * 0.2, Math.min(Math.PI * 0.2, meshRef.current.rotation.x));
    //         meshRef.current.rotation.y = Math.max(-Math.PI * 0.2, Math.min(Math.PI * 0.2, meshRef.current.rotation.y));
    //     }
    // });

    return <>
        <OrthographicCamera
            makeDefault // Sets this camera as the active camera
            position={[1,1,3]}
            zoom={100} // Adjust zoom level
            near={0.1}
            far={1000}
        />
        <OrbitControls
            enablePan={false}
            enableZoom={false}
        />
        <ambientLight intensity={1}/>
        <directionalLight position={[2, 1, 1]} intensity={8}/>
        <group ref={meshRef} position={[0,0,0]}>
            <LaptopModel imagePath={'Dora_Do1_small.jpg'}/>
        </group>
    </>
}

function LaptopModel({ imagePath }) {
    const { nodes, materials } = useGLTF('/laptop.gltf');
    const texture = useTexture(imagePath);

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.laptop001.geometry}
                // material={materials['Material.011']}
                material-map={texture}
                position={[0, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials['Material.010']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001_1.geometry}
                material={materials['Material.011']}
            />
        </group>
    )
}

useGLTF.preload('/laptop.glb')
