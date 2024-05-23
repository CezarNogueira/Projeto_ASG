import React, { useState, useEffect } from 'react';
import './header_module.css';
import { RxHamburgerMenu } from "react-icons/rx";

function Header ({ setCurrentPage }) {
    const [menuOpen, setMenuOpen] = useState(true);

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
                <h2 className='header_logo'>Alto Santo da Glória</h2>
                <RxHamburgerMenu size={24} onClick= {() => {
                    setMenuOpen(!menuOpen);
                }}/>
            </div>
            {menuOpen && (
                <nav>
                    <ul>
                        <li><a onClick={() => setCurrentPage('home')}>Home</a></li>
                        <li><a onClick={() => setCurrentPage('create')}>Cadastrar</a></li>
                        <li><a onClick={() => setCurrentPage('read')}>Exibir</a></li>
                        <li><a onClick={() => setCurrentPage('update')}>Atualizar</a></li>
                        <li><a onClick={() => setCurrentPage('delete')}>Inativar</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header