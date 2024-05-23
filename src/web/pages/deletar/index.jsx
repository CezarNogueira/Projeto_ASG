import React, { useState } from 'react';
import './deletar_module.css'

function Deletar() {
    const [formDados, setFormDados] = useState({
        id: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDados(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Dados a serem Deletados', formDados.id);
            const response = await fetch(`http://localhost:3000/morador/${formDados.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDados)
            });

            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (err) {
            console.error('Erro ao enviar', err)
        }
    };

    return (
        <div className='deletar_container'>
            <div className="cadastro_wrapper">
                <form className='form' onSubmit={handleSubmit}>
                    <div className='input-box'>
                        <label htmlFor="id">ID</label>
                        <input type='text' name='id' value={formDados.id} onChange={handleChange}/>
                    </div>
                    <div className='deletar-button'>
                            <button type='submit' onClick={handleSubmit}>Deletar</button>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Deletar;