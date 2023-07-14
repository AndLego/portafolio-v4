import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { RiDownloadCloud2Fill } from 'react-icons/ri';
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div>
                <span className={style.logo}>AndLego</span>
                <ul>
                    <li>Home</li>
                    <li>Studio</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
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