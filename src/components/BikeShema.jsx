import { useRef } from 'react'; 

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import './BikeShema.scss';

function BikeShema() {

    //Refs

    const bikeRef = useRef();

    //Models

    const bikeModel = useGLTF('/bike.glb');

    return (
        <div className="canvas">

            <Canvas
                camera={{
                    position: [0.15, 0, 1],
                }}
                >

                <OrbitControls />
                <ambientLight intensity={.3} />
                <directionalLight intensity={1} />

                <primitive object={bikeModel.scene} />
                
            </Canvas>
        </div>
    )
}

export default BikeShema;
