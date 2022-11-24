import { useEffect, useState } from "react";
import "./App.css";
import PageNuKenzie from "./componentes/homePage";
import { ScreenIndex } from "./componentes/indexPage";
function App() {
  const formValues = [];
  const [start, setStart] = useState(false);
  const [listTransaction, setListTransactions] = useState(formValues);
  const [filter, setFilter] = useState("todos");
  const [values, setValue] = useState(0);
  useEffect(() => {
    const sum_total = listTransaction.reduce((acc, { value, type }) => {
      if (type === "entrada") {
        return acc + Number(value);
      }
      return acc - Number(value);
    }, 0);

    setValue(sum_total);
  }, [listTransaction]);

  const filterCard = listTransaction.filter((list) =>
    filter === "todos" ? true : list.type === filter
  );

  function addValues(formData) {
    setListTransactions([...listTransaction, formData]);
  }

  function removeCard(index_card) {
    const new_list = listTransaction.filter(
      (list, index) => index !== index_card
    );
    setListTransactions(new_list);
  }

  return (
    <>
      {start ? (
        <PageNuKenzie
          addValues={addValues}
          listTransaction={filterCard}
          setFilter={setFilter}
          removeCard={removeCard}
          values={values}
          setStart={setStart}
        />
      ) : (
        <ScreenIndex setStart={setStart} />
      )}
    </>
  );
}
export default App;
