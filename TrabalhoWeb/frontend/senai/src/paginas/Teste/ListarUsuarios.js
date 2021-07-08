import React, { useState, useEffect } from 'react';
//import './style.css';
import api from '../services/api';

// instalar axios: npm install axios
// criar componente para listar livros

function ListarUsuarios() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('users', {}).then(response => {
            setUsers(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Usuários</h1>
            <ul>
                {
                    users.map(user => (
                        <li>
                            <p>Id: {user.id}</p>
                            <p>Senha: {user.senha}</p>
                            <p>Email: {user.email}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}


export default ListarUsuarios;