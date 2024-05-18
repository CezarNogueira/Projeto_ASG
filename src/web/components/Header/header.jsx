import React, { useState, useEffect } from 'react';
import './header_module.css';
import { RxHamburgerMenu } from "react-icons/rx";

function Header () {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 764) {
                setMenuOpen(true)
            }
        })
    }, [])
    return (
        <header className='header'>
            <div className="header_logo_container">
                <h2 className='header_logo'>ASG</h2>
                <RxHamburgerMenu size={24} onClick= {() => {
                    setMenuOpen(!menuOpen);
                }}/>
            </div>
            {menuOpen && (
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header