import React, { Fragment, useState } from "react";

const Pregunta = () => {
  const [cantidad, guardarCantidad] = useState(0);

  const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  // submit para definir presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <h2>Titulo</h2>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir PPresupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
