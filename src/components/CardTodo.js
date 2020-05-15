import React from "react";

function CardTodo(props) {
    const bg = {
        "1":"card text-white bg-success",
        "2":"card text-white bg-warning",
        "3":"card text-white bg-danger"
    }
  return (
    <div className={bg[props.prioridad]}>
      <di className="card-header"> Creado por:{props.nombre}</di>
      <div className="card-body">
        <p className="card-text">{props.todo}</p>
      </div>
    </div>
  );
}
