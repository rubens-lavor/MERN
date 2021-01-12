import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//IMPORT ADMIN
import Dashboard from "./pages/admin/dashboard";

import Produtos from "./pages/admin/produtos";
import ProdutosEditar from "./pages/admin/produtos/ProdutosEditar";
import ProdutosCadastrar from "./pages/admin/produtos/ProdutosCadastrar";

import Usuarios from "./pages/admin/usuarios";
import UsuariosEditar from "./pages/admin/usuarios/UsuariosEditar";
import UsuariosCadastrar from "./pages/admin/usuarios/UsuariosCadastrar";

//IMPORT CLIENT
import Home from "./pages/client/home";
import ProdutoShow from "./pages/client/produtos/ProdutoShow";
import Login from './pages/admin/login'

import PrivateRoute from './services/wAuth'

function Routes(){

    return(
        <BrowserRouter>
            <Switch>

                {/** ROTA CLIENT */}
                <Route path="/" exact component={Home} />
                <Route path="/produto/:idProduto" exact component={ProdutoShow} />

                {/** ROTA ADMIN */}
                <Route path="/admin/login" exact component={Login} />
                <PrivateRoute path="/admin" exact component={Dashboard} />

                <PrivateRoute path="/admin/produtos" exact component={Produtos} />
                <PrivateRoute path="/admin/produtos/cadastrar" exact component={ProdutosCadastrar} />
                <PrivateRoute path="/admin/produtos/editar/:idProduto" exact component={ProdutosEditar} />

                {/** ROTA USUÁRIO */}
                <PrivateRoute path="/admin/usuarios" exact component={Usuarios} />
                <PrivateRoute path="/admin/usuarios/cadastrar" exact component={UsuariosCadastrar} />
                <PrivateRoute path="/admin/usuarios/editar/:idUsuario" exact component={UsuariosEditar} />

            </Switch>
        </BrowserRouter>
    )
}


export default Routes;