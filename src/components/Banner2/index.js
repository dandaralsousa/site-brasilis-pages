import React from 'react'
import Img from '../../assets/banner-contact.svg'
import Img2 from '../../assets/email.png'
import Img3 from '../../assets/whatsapp.png'

import './styles.css'


const Banner2 = () =>{

   return (
     <div className="main">
                 
        <div className="box_contato">      
            <h1>Entre em <br /> Contato Conosco</h1> 

            <div className="contatos">
                <div className="contatos_caixa">
                    <img className="icone" src={Img2} alt="Ícone de uma carta com um arroba" />
                    <h2>Email</h2>
                    <p>agenciabrasilis01@gmail.com</p>
                </div>

                <div className="contatos_caixa">
                    <img className="icone" src={Img3} alt="Ícone do whatsapp" />
                    <h2>Whatsapp</h2>
                    <p>(85) 99914.2396</p>
                </div>       
            </div>    

             
            
        </div>

        <img src={Img} alt="Duas mulheres com icones de contato em volta" />
    </div>
   )
       
}

export default Banner2