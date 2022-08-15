import React from "react";
import './card.scss';
import { useStateContext } from '../../contexts/ContextProvider';

const Card = ()=>{
    const { opionTitle, cardData } = useStateContext();
    const cardElemt = cardData.find(card => card.title === opionTitle);
    let title = '';
    let img = require('../../images/all-photos.jpg');
    let cardText = '';
    if(cardElemt){
        title = cardElemt.title;
        img = require(`../../images/${cardElemt.coverImage}`);
        cardText = cardElemt.description
    }
   
    return(
        <div className="card">
            <div className="card-content">
                <div className="card-cotent-image">
                <img src={img} alt="test" />
                </div>
                <div className="card-content-body">
                <div className="content-title">
                    <h1>{title}</h1>
                </div>
                <div className="card-content-text">
                    {cardText}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card;