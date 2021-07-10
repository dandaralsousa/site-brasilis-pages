import React from 'react'
import Img from '../../assets/banner2.svg'
import './styles.css'


const Banner = () =>{

   return (
    <div className="main">
        <div>
            <h1>Agência Brasilis <br />de Comunicação</h1>
            <p>Somos uma agência que acredita no poder das ideias e como elas podem influenciar pessoas. Já chegamos ao mercado prontos, mas queremos fugir daquela imagem corporativa quadrada. Nós queremos construir uma agência muito mais afetiva e sensorial, valorizando a experiências das pessoas com a marca, ajudando os clientes a entenderem o poder delas e a conseguirem resultados mais efetivos. Estamos preparados para essa realidade e você pode fazer parte dela.</p>
            <p><strong>Muito prazer, somos a Agência Brasilis.</strong></p>
        </div>

        <img src={Img} alt="Ilustração com um homem uma mulher tocando em icones de rede social" />
    </div>
   )
       
}

export default Banner