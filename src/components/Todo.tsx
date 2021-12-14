import React from "react";

interface iTodoProps {
  id: number;
  name: string;
  done: boolean;
}

const Todo: React.FC<iTodoProps> = (props) => {
  const { id, name, done } = props;

  return (
    <div id="todos">
      <div className="todo">
        <div>
          <p>ID: {id}</p>
        </div>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>Feito: {done ? "Sim" : "Não"}</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
