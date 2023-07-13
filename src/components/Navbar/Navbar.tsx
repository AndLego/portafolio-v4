import React from 'react';
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div>
                Logo
                <ul>
                    <li>Home</li>
                    <li>Studio</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                
            </div>
        </nav>
    );
}

export default Navbar;