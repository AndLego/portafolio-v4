import React from 'react';
import style from "./Hero.module.css"

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
                {/* 3d model */}
                <img src="/public/Default_comic_slim_android_rusty_colors_with_a_couple_of_grea_0_88916727-a753-4853-9702-1eba1b9b1588_0.png" alt="" />
            </article>
        </section>
    );
}

export default Hero;