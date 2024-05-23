import './home_module.css';

function Home ({ setCurrentPage }) {

    return (
        <div className='home_container'>
            <div className="home_wrapper">
                <div className='home_title'>
                    <h1>BEM-VINDO</h1>
                </div>
                <div className='actions_menu'>
                <h3>Selecione a ação que deseja executar</h3>
                    <div className='actions_group'>
                        <button onClick={() => setCurrentPage('create')}>Cadastrar</button>
                        <button onClick={() => setCurrentPage('read')}>Exibir</button>
                        <button onClick={() => setCurrentPage('update')}>Atualizar</button>
                        <button onClick={() => setCurrentPage('delete')}>Deletar</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;