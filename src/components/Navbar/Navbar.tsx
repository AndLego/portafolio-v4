import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { RiDownloadCloud2Fill } from 'react-icons/ri';
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.logo_list}>
                <div className={style.logo_container}>
                    <span className={style.logo}>AndLego</span>
                    <span>the developer</span>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Studio</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={style.buttons}>
                <a href="#">
                    <FiGithub />
                    <span>
                        Github
                    </span>
                </a>
                <button>Download CV <RiDownloadCloud2Fill /></button>
            </div>
        </nav>
    );
}

export default Navbar;