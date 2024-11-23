'use client'

import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import {useRef, useState} from "react";
import {TextureLoader} from "three";
import {useGLTF} from "@react-three/drei";

export default function R3FDComponent({image}) {
    const containerRef = useRef();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1; // Normalize to [-1, 1]
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1; // Normalize to [-1, 1]

        setMousePosition({ x, y });
    };

    return <div
        id="canvas-container"
        ref={containerRef}
        onMouseMove={(e) => handleMouseMove(e)}
    >
        <Canvas shadows camera={{}}>
            <ambientLight intensity={1}/>
            <directionalLight position={[2, 1, 1]} intensity={3}/>
            {/* Objects */}
            <AnimatedCube image={image} mousePosition={mousePosition}/>
            {/*<Ground />*/}
        </Canvas>
    </div>
}

function AnimatedCube({mousePosition, image}) {
    const texture = useLoader(TextureLoader, image);
    const meshRef = useRef();

    // Update rotation smoothly on each frame
    useFrame(() => {
        if (meshRef.current) {
            let targetX = mousePosition.y * Math.PI * 0.1; // Limit to ±0.1 * Math.PI
            let targetY = mousePosition.x * Math.PI * 0.1; // Limit to ±0.1 * Math.PI

            meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.1;
            meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.1;

            // Clamp rotation values
            meshRef.current.rotation.x = Math.max(-Math.PI * 0.2, Math.min(Math.PI * 0.2, meshRef.current.rotation.x));
            meshRef.current.rotation.y = Math.max(-Math.PI * 0.2, Math.min(Math.PI * 0.2, meshRef.current.rotation.y));
        }
    });

    return <mesh
        ref={meshRef}
        scale={[2, 2, 2]}
        castShadow
        receiveShadow
        // geometry={nodes.Cube001_1.geometry}
        // material={materials['Material.011']}
    >
        <boxGeometry args={[3, 2, 2]}/>
        <meshStandardMaterial map={texture}/>
    </mesh>
}
