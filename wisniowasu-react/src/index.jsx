import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';

import ContactComponent from './components/layouts/ContactComponent/ContactComponent';
import ForStudentComponent from './components/layouts/ForStudentComponent/ForStudentComponent';
import HomeComponent from './components/layouts/HomeComponent/HomeComponent';
import ProjectsComponent from './components/layouts/ProjectsComponent/ProjectsComponent';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomeComponent/>}/>
                    <Route path="forstudent" element={<ForStudentComponent/>}/>
                    <Route path="contact" element={<ContactComponent/>}/>
                    <Route/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);