import Card from "./renderCard";
import "./filter.css";
import NoCard from "../../../images/NoCard.png";
const ListValuesInserted = ({ listTransaction, setFilter, removeCard }) => {
  if (listTransaction.length !== 0) {
    return (
      <div className="container_list_cards">
        <div className="container_filters">
          <p>Resumo financeiro</p>
          <div className="btns_filter">
            <button onClick={() => setFilter("todos")}>Todos</button>
            <button onClick={() => setFilter("entrada")}>Entrada</button>
            <button onClick={() => setFilter("saida")}>Saída</button>
          </div>
        </div>
        <ul>
          {listTransaction.map((transaction, index) => (
            <Card
              key={index}
              transaction={transaction}
              removeCard={removeCard}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="container_list_cards">
        <div className="container_filters">
          <p>Resumo financeiro</p>
          <div className="btns_filter">
            <button onClick={() => setFilter("todos")}>Todos</button>
            <button onClick={() => setFilter("entrada")}>Entrada</button>
            <button onClick={() => setFilter("saida")}>Saída</button>
          </div>
        </div>
        <h3 className="h3_nothing_card">
          Você ainda não possui nenhum lançamento
        </h3>
        <li className="li_card_values">
          <img src={NoCard} alt="" width="100%" />
        </li>
        <br />
        <li className="li_card_values">
          <img src={NoCard} alt="" width="100%" />
        </li>
      </div>
    );
  }
};
export default ListValuesInserted;
