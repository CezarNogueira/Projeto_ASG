import React from 'react';
import '../css/App.css';
import Header from '../components/Header/header.jsx';
import Cadastro from '../pages/cadastro/index.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Cadastro />
      </main>
    </div>
  );
}

export default App