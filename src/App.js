import { useEffect, useState } from "react";
import "./App.css";
import PageNuKenzie from "./componentes/homePage";
import { ScreenIndex } from "./componentes/indexPage";
function App() {
  const formValues = [
    { description: "Salário recebido", value: 2500, type: "entrada" },
    { description: "Conta de luz", value: 150, type: "saida" },
  ];
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

  function removeCard(listDescription) {
    const new_list = listTransaction.filter(
      (list) => list.description !== listDescription
    );
    setListTransactions(new_list);
  }

  return (
    <div className="App">
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
    </div>
  );
}
export default App;
