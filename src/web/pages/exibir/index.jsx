import React, { useState, useEffect } from 'react';
import './exibir_module.css'

function Exibir () {

    const [consultarDados, setConsultarDados] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/morador', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            setConsultarDados(data);
        } catch (err) {
            console.log('Erro ao Buscar dados do Banco', err);
        }
    };

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

    const handleDelete = async (e) => {
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

    useEffect(() => {
        handleSubmit(); //Busca do BD para carregar o componente
    }, []); //enviar array vazio para garantir execução unica



    return (
        <div className='exibir_container'>

            <ol className='data-table'>
                {consultarDados.map((linha, index) => (
                    <li key={index}>
                        <span>ID: {linha.id_morador}</span>
                        <span>Nome: {linha.nome_morador}</span>
                        <span>Idade: {linha.idade_morador}</span>
                        <span>CPF: {linha.cpf_morador}</span>
                        <span>Data de Nascimento: {linha.datanascimento_morador}</span>
                        <span>Gênero: {linha.genero_morador}</span>
                        <span>Estado Civil: {linha.estadocivil_morador}</span>
                        <span>Telefone: {linha.telefone_morador}</span>
                        <span>CEP: {linha.cep_morador}</span>
                    </li>
                ))}
            </ol>

            <form className='exibir_form' onSubmit={handleSubmit}>
                <button type='submit'>Exibir</button>
            </form>
        </div>
    );
}

export default Exibir;