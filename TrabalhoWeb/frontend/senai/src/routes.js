
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloMessage from './paginas/Teste/HelloMessage';
//import ListarLivros2 from './paginas/Teste/Livro2';
//import CadastroLivro from './paginas/Teste/CadastroLivro';
import CadastroUsuario from './paginas/Teste/CadastroUsuario';
import Login from './paginas/Teste/Login';
import CadastroVinho from './paginas/Teste/CadastroVinho';
import menu from './paginas/Teste/menu';
import Usuarios from './paginas/Teste/Usuarios';
import Produtos from './paginas/Teste/Produtos';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={HelloMessage} />
                <Route path='/cadastrousuario' exact={true} component={CadastroUsuario} />
                <Route path='/login' exact={true} component={Login} />
                <Route path='/cadastrovinho' exact={true} component={CadastroVinho} />
                <Route path='/menu' exact={true} component={menu} />
                <Route path='/usuarios' exact={true} component={Usuarios} />
                <Route path='/produtos' exact={true} component={Produtos} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
