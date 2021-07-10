import React, { useState, useEffect } from 'react';
import './styles.css'

const Cards = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        const pegaDados = async () => {
            const resposta = await fetch('https://my-json-server.typicode.com/dandaralsousa/cards/db')
            const dados = await resposta.json()
            setCards(dados.services)

        }
        pegaDados()
    }, [])

    return (
        <div className="container_box">
           {cards.map(card =>(
               <div className="box_card">
                   <img src={card.image}/>                   
                   <h3>{card.title}</h3>
               </div>
           ))}
          
        </div>

     

    )




}

export default Cards