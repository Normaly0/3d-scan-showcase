import { useRef } from 'react'; 
import { useControls } from 'leva'

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import vertexShader from '../shaders/TerrainShader/vertexShader.glsl';
import fragmentShader from '../shaders/TerrainShader/fragmentShader.glsl';

import { EffectComposer, Bloom } from '@react-three/postprocessing';

import './TerrainShader.scss';

function TerrainShader() {

    const { Levels } = useControls({
        Levels: {
            value: 2.0,
            min: 0.1,
            max: 5.0,
            step: 0.1,
          },
        
    })

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
                <Scene 
                    levels={Levels}
                />

            </Canvas>
        </div>
    )
}

export default TerrainShader;


function Scene(props) {

    const materialRef = useRef();

    const uniforms = {
        uTime: {value: 0}
    }

    useFrame(({clock}) => {
        materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    })

    return (
        <mesh>
            <planeGeometry args={[1, 1, 128, 128]} />
            <rawShaderMaterial 
                vertexShader={vertexShader} 
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                side={2}
                ref={materialRef}
            />
        </mesh>
    )
}