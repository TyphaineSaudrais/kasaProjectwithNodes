import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/style/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Logements from './pages/Logements';
import Error from './components/Error';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle `


body {
  margin: 0;
  font-family: 'Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  
  
    background-color: #FFFFFF
}

`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <GlobalStyle/>
            <Header/>
            <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/Apropos" element={<Apropos/>}/>
            <Route path="/Logements/:id"  element={<Logements/>}/>
            <Route  path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
    </Router>
  </React.StrictMode>
)


