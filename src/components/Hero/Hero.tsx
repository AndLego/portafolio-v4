import React from 'react';
import style from "./Hero.module.css"
import { Navbar } from '..';

const Hero = () => {
    return (
        <section className={style.hero}>
            <Navbar />

        </section>
    );
}

export default Hero;