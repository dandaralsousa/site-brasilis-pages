import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from '../pages/Home'
import Serviços from '../pages/Serviços'
import NossosClientes from '../pages/NossosClientes'
import Contato from '../pages/Contato'



const Routes = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/serviços' component={Serviços}/>
                <Route exact path='/clientes' component={NossosClientes}/>
                <Route exact path='/contato' component={Contato}/>
            </Switch>           
        </BrowserRouter>
    )
}

export default Routes