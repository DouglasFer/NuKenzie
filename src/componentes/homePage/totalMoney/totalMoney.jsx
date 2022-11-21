import "./totalMoney.css";
const TotalMoney = ({ values }) => {
  return (
    <div className="container_total_money">
      {console.log()}
      <div className="value_total">
        <h4>Valor Total:</h4>
        <span>$ {values}</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};
export default TotalMoney;
