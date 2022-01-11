import React, { useState } from "react";

const AddTodo = () => {
  const [todoDescricao, setTodoDescricao] = useState("");

  return (
    <div id="addTodoContainer">
      <div>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Nova Tarefa</h1>
      </div>

      <input
        type="text"
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
          setTodoDescricao(evt.target.value);
        }}
      />
    </div>
  );
};

export default AddTodo;
