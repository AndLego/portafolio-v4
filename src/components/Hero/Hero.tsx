import React from 'react';
import style from "./Hero.module.css"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei';

const Hero = () => {
    return (
        <section className={style.hero}>
            <article className={style.left}>
                <h1>Think. Make. Solve.</h1>
                <div>
                    <div className={style.linea}></div>
                    <h2>What I Do</h2>
                </div>
                <p>I enjoy learning, exploring and creating delightful, human-centered digital experiences.</p>
                <button>Explore</button>
            </article>
            <article className={style.right}>
                <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[-1, 1, 4]} />
                    <Sphere args={[1, 100, 200]} scale={2.5} >
                        <MeshDistortMaterial
                            color={"#2b0546"}
                            attach="material"
                            distort={0.5}
                            speed={2} />
                    </Sphere>
                </Canvas>
                <img src="/public/new_chibi.png" alt="" />
            </article>
        </section>
    );
}

export default Hero;