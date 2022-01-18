import React from "react";

interface AddTodoRender {
  setNovoTodoDescricao: React.Dispatch<React.SetStateAction<string>>;
}

const AddTodo: React.FC<AddTodoRender> = (props) => {
  const { setNovoTodoDescricao } = props;

  return (
    <div id="addTodoContainer">
      <div>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Nova Tarefa</h1>
      </div>

      <input
        id="addTodoInput"
        type="text"
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
          setNovoTodoDescricao(evt.target.value);
        }}
      />
    </div>
  );
};

export default AddTodo;
