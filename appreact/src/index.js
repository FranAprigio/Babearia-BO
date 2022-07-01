import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from "../src/Pages/Main/main.jsx"
import Login from "../src/Pages/Login/login.jsx"
import Agenda from "../src/Pages/Agenda/agenda.jsx"
import Agendamento from "../src/Pages/Agendamento/agendamento.jsx"


import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "../src/Componentes/AuthContext/authcontext.jsx";




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
    <AuthContext>
      <React.StrictMode>
      
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/login" element={<Login />} />

        <Route path="/agenda" element={<Agenda />} />

        <Route path="/agendamento" element={<Agendamento />} />

      </Routes>

      </React.StrictMode>
    </AuthContext>

  </BrowserRouter>
);

