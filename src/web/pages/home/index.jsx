import './home_module.css';

function Home ({ setCurrentPage }) {

    return (
        <div className='home_container'>
            <div className="home_wrapper">
                <div className='actions_menu'>
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