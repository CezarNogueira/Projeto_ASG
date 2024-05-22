import React, { useState } from 'react';
import './cadastro_module.css';

function Cadastro () {

    const [formDados, setFormDados] = useState({
        nome_morador: '',
        idade_morador: '',
        cpf_morador: '',
        datanascimento_morador: '',
        genero_morador: '',
        estadocivil_morador: '',
        telefone_morador: '',
        cep_morador: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDados(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Dados a serem enviados:", formDados);
            const response = await fetch('http://localhost:3000/cadastrar/morador', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formDados)
            });

            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (err) {
            console.error('Erro ao enviar', err)
        }
    }

    return (
    <div className="cadastro_container">
        <div className="cadastro_wrapper">
            <div className="form"> 
                <form onSubmit={handleSubmit}>
                    <div className="form-header">
                        <div className="title">
                            <h1>CADASTRO</h1>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-box">
                            <label htmlFor="nome_morador">Nome</label>
                            <input type="text" name="nome_morador" value={formDados.nome_morador} onChange={ handleChange } required/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="idade_morador">Idade</label>
                            <input type="text" name="idade_morador" value={formDados.idade_morador} onChange={ handleChange } required/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="cpf_morador">CPF</label>
                            <input type="text" name="cpf_morador" value={formDados.cpf_morador} onChange={ handleChange } required/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="datanascimento_morador">Data de Nascimento</label>
                            <input type="text" name="datanascimento_morador" value={formDados.datanascimento_morador} onChange={ handleChange } required/>
                        </div>

                        <div className="gender-inputs">
                            <div className="gender-title">
                                <h6>Gênero</h6>
                            </div>

                            <div className="gender-group">
                                <div className="gender-input">
                                    <input type="radio" name="genero_morador" value={formDados.genero_morador} onChange={ handleChange }/>
                                    <label htmlFor="masculino">Masculino</label>
                                </div>

                                <div className="gender-input">
                                    <input type="radio" name="genero_morador" value={formDados.genero_morador} onChange={ handleChange } />
                                    <label htmlFor="feminino">Feminino</label>
                                </div>

                                <div className="gender-input">
                                    <input type="radio" name="genero_morador" value={formDados.genero_morador} onChange={ handleChange }/>
                                    <label htmlFor="outro">Outro</label>
                                </div>
                            </div>
                        </div>

                        <div className="civil-inputs">
                            <div className="civil-title">
                                <h6>Estado Civil</h6>
                            </div>

                            <div className="civil-group">
                                <div className="civil-input">
                                    <input type="radio" name="estadocivil_morador" value={formDados.estadocivil_morador} onChange={ handleChange }/>
                                    <label htmlFor="solteiro">Solteiro</label>
                                </div>

                                <div className="civil-input">
                                    <input type="radio" name="estadocivil_morador" value={formDados.estadocivil_morador} onChange={ handleChange }/>
                                    <label htmlFor="casado">Casado</label>
                                </div>

                                <div className="civil-input">
                                    <input type="radio" name="estadocivil_morador" value={formDados.estadocivil_morador} onChange={ handleChange }/>
                                    <label htmlFor="outro">Outro</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-box">
                            <label htmlFor="telefone_morador">Telefone/Celular</label>
                            <input type="tel" name="telefone_morador" placeholder="(xx) xxxxx-xxxx" onChange={ handleChange } required/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="cep_morador">CEP</label>
                            <input type="text" name="cep_morador" value={formDados.cep_morador} onChange={ handleChange } required/>
                        </div>
                    </div>

                    <div className='confirm-button'>
                        <button type='submit'>Confirmar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Cadastro