import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodosInfo from "./components/TodosInfo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      name: "Estudar JS",
      done: true,
    },
    {
      id: 1,
      name: "Fazer Compras",
      done: false,
    },
    {
      id: 2,
      name: "Jogar CS",
      done: false,
    },
    {
      id: 3,
      name: "Fazer Comida",
      done: false,
    },
  ]);

  const [doneTodos, setDoneTodos] = useState(0);
  const [todoTodos, setTodoTodos] = useState(0);

  const getDoneTodos = () => {
    let contador = 0;
    todos.forEach((todo) => {
      if (todo.done) contador++;
    });
    return contador;
  };

  const getTodoTodos = () => {
    let contador = 0;
    todos.forEach((todo) => {
      if (!todo.done) contador++;
    });
    return contador;
  };

  useEffect(() => {
    setDoneTodos(getDoneTodos())
    setTodoTodos(getTodoTodos())
  }, [todos])

  return (
    <div id="container">
      <div id="titlebar">
        <p>Lista de Afazeres</p>
      </div>
      <div id="content">
        <div id="todos">
          {todos.map((todo) => (
            <Todo id={todo.id} name={todo.name} done={todo.done} />
          ))}
        </div>
        <TodosInfo
          total={todos.length}
          done={doneTodos}
          todo={todoTodos}
        />
      </div>
    </div>
  );
}

export default App;
