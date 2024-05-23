import React, { useState } from 'react';
import '../css/App.css';
import Header from '../components/Header/header.jsx';
import Cadastro from '../pages/cadastro/index.jsx';
import Home from '../pages/home/index.jsx';
import Exibir from '../pages/exibir/index.jsx';
import Atualizar from '../pages/atualizar/index.jsx';
import Deletar from '../pages/deletar/index.jsx';

function App() {

  const [currentPage, setCurrentPage] = useState();

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home setCurrentPage={setCurrentPage}/>;
            case 'create':
                return <Cadastro />;
            case 'read':
                return <Exibir />;
            case 'update':
                return <Atualizar />;
            case 'delete':
                return <Deletar />;
        default:
            return <Home setCurrentPage={setCurrentPage}/>;
        }
    }

  return (
    <div className="App">
      <header>
        <Header setCurrentPage={setCurrentPage}/>
      </header>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App