import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Holoboard from "../../Holoboard/Holoboard.jsx"
import React from 'react';

const Web_development = () => {
    return (
        <>
            <Canvas>
                <Stage adjustCamera={1.2} environment={'city'} intensity={0.6}>
                    <Holoboard />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
        </>
    );
}

export default Web_development;