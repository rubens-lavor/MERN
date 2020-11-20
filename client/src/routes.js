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
                <Route path="/admin" exact component={Dashboard} />
                <Route path="/admin/login" exact component={Login} />

                <Route path="/admin/produtos" exact component={Produtos} />
                <Route path="/admin/produtos/cadastrar" exact component={ProdutosCadastrar} />
                <Route path="/admin/produtos/editar/:idProduto" exact component={ProdutosEditar} />

                {/** ROTA USUÁRIO */}
                <PrivateRoute path="/admin/usuarios" exact component={Usuarios} />
                <Route path="/admin/usuarios/cadastrar" exact component={UsuariosCadastrar} />
                <Route path="/admin/usuarios/editar/:idUsuario" exact component={UsuariosEditar} />

            </Switch>
        </BrowserRouter>
    )
}


export default Routes;