import React from "react";
import "./card.css";
import Lixeira from "../../../../images/lixo.png";

const Card = ({ transaction, removeCard, index }) => {
  return (
    <li className="li_card_values ">
      <div className="description_type_style">
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
      </div>
      <div className="value_btn_style">
        <p>R$ {transaction.value}</p>
        <button className="btn_trash" onClick={() => removeCard(index)}>
          <img src={Lixeira} alt="" className="img_trash" />
        </button>
      </div>
    </li>
  );
};
export default Card;
