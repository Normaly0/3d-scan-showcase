import { useRef } from 'react'; 
import { useControls, Leva } from 'leva'

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import vertexShader from '../shaders/TerrainShader/vertexShader.glsl';
import fragmentShader from '../shaders/TerrainShader/fragmentShader.glsl';

import { EffectComposer, Bloom } from '@react-three/postprocessing';

import './TerrainShader.scss';

function TerrainShader() {

    const { scale, bloom } = useControls({
        scale: {
            value: 2.0,
            min: 0.5,
            max: 5.0,
            step: 0.1,
        },
        bloom: true
    })

    return (
        <div className="canvas">
            <Leva collapsed />

            <Canvas
                camera={{
                    position: [0.25, - 0.25, 1]
                }}
            >

                <color args={['black']} attach="background" />

                {
                    bloom &&
                    <EffectComposer>
                        <Bloom 
                            intensity={1.1}
                            luminanceThreshold={1.5}
                            mipmapBlur
                        />
                    </EffectComposer>
                }

                <OrbitControls />
                <Scene 
                    scale={scale}
                />

            </Canvas>
        </div>
    )
}

export default TerrainShader;


function Scene(props) {

    const materialRef = useRef();

    const uniforms = useRef({
        uTime: {value: 0},
        uScale: {value: 2.0}
    });

    useFrame(({clock}) => {
        uniforms.current.uTime.value = clock.getElapsedTime();
        uniforms.current.uScale.value = props.scale;
    })

    return (
        <mesh>
            <planeGeometry args={[1, 1, 128, 128]} />
            <rawShaderMaterial 
                vertexShader={vertexShader} 
                fragmentShader={fragmentShader}
                uniforms={uniforms.current}
                side={2}
                ref={materialRef}
            />
        </mesh>
    )
}