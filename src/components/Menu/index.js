import React from 'react'
import Logo from '../../assets/brasilis-logo.png'
import { Link } from 'react-router-dom'

import './styles.css'

const Menu = () => {
    return (
        <nav className="navegacao">
            <div className="navegacao_box">
                      
            <div className="container_menu">
                <img class="logo" src={Logo} alt="Logotipo Agência Brasilis"/>

                <ul className="menu">
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link"to="/serviços">Serviços</Link>
                    </li>
                    <li>
                        <Link className="link"  to="/clientes">Nossos Clientes</Link>
                    </li>
                    <li>
                        <Link className="link"  to="/contato">Contato</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Menu