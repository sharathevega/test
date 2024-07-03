import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './assets/css/bootstrap.css';
import './assets/css/revolution-slider.css';
import './assets/css/common.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/animate.css';
import "./assets/css/flaticon.css";
import "./assets/css/font-awesome.css";
import "./assets/css/hover.css";
import "./assets/css/jquery.fancybox.css";
import "./assets/css/owl.css";
import "./assets/css/style-header.css";
import "./assets/css/theme.css";
import SubmitAbstract from './components/SubmitAbstract';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/submit' element={<SubmitAbstract />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
