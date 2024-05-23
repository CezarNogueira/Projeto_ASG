import React, { useState } from 'react';
import '../css/App.css';
import Header from '../components/Header/header.jsx';
import Cadastro from '../pages/cadastro/index.jsx';
import Home from '../pages/home/index.jsx';
import Exibir from '../pages/exibir/index.jsx';

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
                return <Cadastro />;
            case 'delete':
                return <Cadastro />;
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