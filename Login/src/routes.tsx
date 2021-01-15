import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login';


function Routers() {
    return (   
        <BrowserRouter>
            <Route path="/Cadastro" exact component={Cadastro}/>
            <Route path="/Login" exact component={Login}/>
        </BrowserRouter>
     );
}
export default Routers;