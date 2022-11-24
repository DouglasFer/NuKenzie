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
    <>
      <HeaderPage setStart={setStart} />
      <FormValuesComponent addValues={addValues} setFilter={setFilter} />
      <TotalMoney values={values} listTransaction={listTransaction} />
      <ListValuesInserted
        listTransaction={listTransaction}
        setFilter={setFilter}
        removeCard={removeCard}
      />
    </>
  );
};
export default PageNuKenzie;
