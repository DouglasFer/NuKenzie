import FormValuesComponent from "./form/form";
import ListValuesInserted from "./listCard";
import TotalMoney from "./totalMoney/totalMoney";
import "./index.css";
import HeaderPage from "./header/header";

const PageNuKenzie = ({
  listTransaction,
  addValues,
  setFilter,
  removeCard,
  values,
  setStart,
}) => {
  return (
    <div className="container">
      <HeaderPage setStart={setStart} />
      <div className="content_page">
        <div className="container_values">
          <FormValuesComponent addValues={addValues} setFilter={setFilter} />
          <TotalMoney values={values} listTransaction={listTransaction} />
        </div>
        <ListValuesInserted
          listTransaction={listTransaction}
          setFilter={setFilter}
          removeCard={removeCard}
        />
      </div>
    </div>
  );
};
export default PageNuKenzie;
