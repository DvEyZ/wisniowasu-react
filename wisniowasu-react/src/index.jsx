import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ForStudent from './components/views/ForStudent';
import Home from './components/views/Home'
import Team from './components/views/Team';
import Contact from './components/views/Contact'
import Projects from './components/views/Projects';
import WiFI from './components/views/WiFI';

import './main.scss'
import { FooterComponent } from './components/reusables/FooterComponent/FooterComponent';
import { MenuComponent } from './components/reusables/MenuComponent/MenuComponent';

const App = () =>
{
    return (
        <div id="app">
            <MenuComponent active={useLocation().pathname.split('/')[1]} />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/team/*" element={<Team/>}/>
                <Route path="/forstudent" element={<ForStudent/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/wifi/*" element={<WiFI/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <FooterComponent/>
        </div>
    );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

window.addEventListener('scroll', () => {
    var scrollPosition = document.scrollingElement.scrollTop;
    var body = document.body;
  
    if (scrollPosition > 170) {
        body.classList.add('nav-bg');
    } 
    else {
        if (body.classList.contains('nav-bg')) {
            body.classList.remove('nav-bg');
        }
    }
})