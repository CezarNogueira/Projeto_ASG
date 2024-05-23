import './home_module.css'

function Home () {

    return (
        <div className='home_container'>
            <div className="home_wrapper">
                <div className='home_title'>
                    <h1>BEM-VINDO</h1>
                    <h3>Selecione a ação que deseja executar</h3>
                </div>
                <div className='actions_menu'>
                    <div className='actions_group'>
                        <button>Cadastrar</button>
                        <button>Exibir</button>
                    </div>
                    <div className='actions_group'>
                        <button>Atualizar</button>
                        <button>Inativar</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;