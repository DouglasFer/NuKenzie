import React, { useState } from "react";
import "./form.css";
const FormValuesComponent = ({ addValues }) => {
  const [formValues, setFormValues] = useState([
    {
      description: "",
      value: "",
      type: "",
    },
  ]);

  function prevent(event) {
    event.preventDefault();
    addValues(formValues);
    setFormValues({
      description: "",
      value: "",
      type: "",
    });
  }
  return (
    <div className="container_form">
      <form onSubmit={prevent}>
        <div className="descrition_style">
          <p>Descrição</p>
          <input
            type="text"
            required
            value={formValues.description}
            onChange={(event) =>
              setFormValues({ ...formValues, description: event.target.value })
            }
            placeholder="Digite aqui sua descrição"
          />
          <p>Ex: Comprad e roupas</p>
        </div>
        <div className="align_value_select">
          <div className="values">
            <label>Valor</label>
            <input
              type="number"
              required
              value={formValues.value}
              onChange={(event) =>
                setFormValues({ ...formValues, value: event.target.value })
              }
            />
          </div>
          <div className="type_value">
            <label>Tipo de valor</label>
            <select
              name="select_type"
              required
              id="type_value"
              value={formValues.type}
              onChange={(event) =>
                setFormValues({ ...formValues, type: event.target.value })
              }
            >
              <option></option>
              <option key="entrada" value="entrada">
                Entrada
              </option>
              <option key="saida" value="saida">
                Saída
              </option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn_insert_value">
          Inserir Valor
        </button>
      </form>
    </div>
  );
};
export default FormValuesComponent;
