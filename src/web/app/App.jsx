import React from 'react';
import '../css/App.css';
import Header from '../components/Header/header.jsx';
import Cadastro from '../pages/cadastro/index.jsx';
import Home from '../pages/home/index.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App