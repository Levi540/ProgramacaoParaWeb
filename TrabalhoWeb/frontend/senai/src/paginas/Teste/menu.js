import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
//import './style.css';
import api from '../services/api';

// instalar axios: npm install axios
// criar componente para listar livros

function Menu() {
    //const [livros, setLivros] = useState([]);

    // useEffect(() => {
    //     api.get('livros', {}).then(response => {
    //         setLivros(response.data);
    //     });
    // }, []);

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                <li>
                    <Link to="/cadastrousuario">Cadastro de usuário</Link>
                </li>
                <li>
                    <Link to="/cadastrovinho">Cadastro de vinho</Link>
                    
                </li>
                <li>
                    <Link to="/usuarios">Usuários cadastrados</Link>
                </li>
                <li>
                    <Link to="/produtos">Produtos cadastrados</Link>
                </li>
            </ul>
        </div>
    );
}


export default Menu;