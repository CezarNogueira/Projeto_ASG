import './cadastro_module.css';

function Cadastro () {
    return (
    <div className="cadastro_container">
        <div className="cadastro_wrapper">
            <div className="form"> 
                <form action="#">
                    <div className="form-header">
                        <div className="title">
                            <h1>Cadastro</h1>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-box">
                            <label htmlFor="nome_morador">Nome</label>
                            <input id="nome_morador" type="text" name="nome_morador" required/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="idade_morador">Idade</label>
                            <input id="idade_morador" type="text" name="idade_morador" required/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="cpf_morador">CPF</label>
                            <input id="cpf_morador" type="text" name="cpf_morador" required/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="datanascimento_morador">Data de Nascimento</label>
                            <input id="datanascimento_morador" type="text" name="datanascimento_morador" required/>
                        </div>

                        <div className="gender-inputs">
                            <div className="gender-title">
                                <h6>Gênero</h6>
                            </div>

                            <div className="gender-group">
                                <div className="gender-input">
                                    <input id="masculino" type="radio" name="genero_morador"/>
                                    <label htmlFor="masculino">Masculino</label>
                                </div>

                                <div className="gender-input">
                                    <input id="feminino" type="radio" name="genero_morador"/>
                                    <label htmlFor="feminino">Feminino</label>
                                </div>

                                <div className="gender-input">
                                    <input id="outro" type="radio" name="genero_morador"/>
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
                                    <input id="solteiro" type="radio" name="estadocivil_morador"/>
                                    <label htmlFor="solteiro">Solteiro</label>
                                </div>

                                <div className="civil-input">
                                    <input id="casado" type="radio" name="estadocivil_morador"/>
                                    <label htmlFor="casado">Casado</label>
                                </div>

                                <div className="civil-input">
                                    <input id="outro" type="radio" name="estadocivil_morador"/>
                                    <label htmlFor="outro">Outro</label>
                                </div>
                            </div>
                        </div>

                        <div className="input-box">
                            <label htmlFor="telefone_morador">Telefone/Celular</label>
                            <input id="telefone_morador" type="tel" name="telefone_morador" placeholder="(xx) xxxxx-xxxx" required/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="cep_morador">CEP</label>
                            <input id="cep_morador" type="text" name="cep_morador" required/>
                        </div>
                    </div>

                    <div className='confirm-button'>
                        <button>Confirmar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Cadastro