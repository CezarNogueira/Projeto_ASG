import React from 'react';
import './header_module.css';
import { FaHouse } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

function Header ({ setCurrentPage }) {

    return (
        <header className='header'>
            <div className="header_logo_container">
                <h2 className='header_logo'>Alto Santo da Glória</h2>
            </div>
                <nav>
                    <ul>
                        <li onClick={() => setCurrentPage('home')}><a><FaHouse size={28}/></a><p>Home</p></li>
                        <li onClick={() => setCurrentPage('create')}><a><PiSignInBold size={28}/></a><p>Cadastrar</p></li>
                        <li onClick={() => setCurrentPage('read')}><a><FaEye size={28}/></a><p>Exibir</p></li>
                        <li onClick={() => setCurrentPage('update')}><a><GrDocumentUpdate size={28}/></a><p>Atualizar</p></li>
                        <li onClick={() => setCurrentPage('delete')}><a><MdDelete size={28}/></a><p>Deletar</p></li>
                    </ul>
                </nav>
        </header>
    );
}

export default Header