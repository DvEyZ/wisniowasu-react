import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';

import ContactComponent from './components/views/ContactComponent/ContactComponent';
import ForStudentComponent from './components/views/ForStudentComponent/ForStudentComponent';
import HomeComponent from './components/views/HomeComponent/HomeComponent';
import ProjectsComponent from './components/views/ProjectsComponent/ProjectsComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
