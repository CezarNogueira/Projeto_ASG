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
                        <li><a onClick={() => setCurrentPage('home')}><FaHouse size={28}/></a><p>Home</p></li>
                        <li><a onClick={() => setCurrentPage('create')}><PiSignInBold size={28}/></a><p>Cadastrar</p></li>
                        <li><a onClick={() => setCurrentPage('read')}><FaEye size={28}/></a><p>Exibir</p></li>
                        <li><a onClick={() => setCurrentPage('update')}><GrDocumentUpdate size={28}/></a><p>Atualizar</p></li>
                        <li><a onClick={() => setCurrentPage('delete')}><MdDelete size={28}/></a><p>Deletar</p></li>
                    </ul>
                </nav>
        </header>
    );
}

export default Header