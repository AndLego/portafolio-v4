import React from 'react';
import style from "./Who.module.css"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Robot from "../Robot/Robot.jsx"

const Who = () => {
    return (
        <section className={style.hero}>
            <article className={style.left}>
                <Canvas>
                    <Stage adjustCamera={1.8} environment={'city'} intensity={0.6}>
                        <Robot />
                    </Stage>
                    <OrbitControls enableZoom={false} autoRotate />
                </Canvas>

            </article>
            <article className={style.right}>
                <h1>Creating Awesomeness, Bug-Free Edition</h1>
                <div>
                    <div className={style.linea}></div>
                    <h2>Who I Am</h2>
                </div>
                <p>I'm a developer who is passionate about learning new technologies and applying them. I have developed multiple projects for almost 2 years and I immerse myself in each one of them when writing their code.</p>
                <button>See my work</button>
            </article>
        </section>
    );
}

export default Who;