import { useRef } from 'react';

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import vertexShader from '../shaders/TerrainShader/vertexShader.glsl';
import fragmentShader from '../shaders/TerrainShader/fragmentShader.glsl';

import { EffectComposer, Bloom } from '@react-three/postprocessing';

import './TerrainShader.scss';

function TerrainShader() {



    return (
        <div className="canvas">
            <Canvas
                camera={{
                    position: [0.25, - 0.25, 1]
                }}
                >

                <color args={['black']} attach="background" />

                <EffectComposer>
                    <Bloom 
                        intensity={1.1}
                        luminanceThreshold={1.5}
                        mipmapBlur
                    />
                </EffectComposer>

                <OrbitControls />
                <Scene />

            </Canvas>
        </div>
    )
}

export default TerrainShader;


function Scene() {

    const meshRef = useRef();

    const uniforms = {
        uTime: {value: 0}
    }

    useFrame((e) => {
        meshRef.current.material.uniforms.uTime.value = e.clock.elapsedTime;
    })

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[1, 1, 128, 128]} />
            <rawShaderMaterial 
                vertexShader={vertexShader} 
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                side={2}
            />
        </mesh>
    )
}