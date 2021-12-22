import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodosInfo from "./components/TodosInfo";
import { AppContext } from "./context/AppContext";
import { BsSearch } from "react-icons/bs";

function App() {
  const [appContext, setAppContext] = useState({
    todos: [
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
    ],
    filteredTodos: [
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
    ],
  });
  const [doneTodos, setDoneTodos] = useState(0);
  const [todoTodos, setTodoTodos] = useState(0);

  const getDoneTodos = () => {
    let contador = 0;
    appContext.todos.forEach((todo) => {
      if (todo.done) contador++;
    });
    return contador;
  };

  const getTodoTodos = () => {
    let contador = 0;
    appContext.todos.forEach((todo) => {
      if (!todo.done) contador++;
    });
    return contador;
  };

  const searchTodos = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setAppContext((prev) => ({
      ...prev,
      filteredTodos: appContext.todos.filter((todo) =>
        todo.name.toLowerCase().includes(evt.target.value.toLowerCase())
      ),
    }));
  };

  useEffect(() => {
    setDoneTodos(getDoneTodos());
    setTodoTodos(getTodoTodos());
  }, [appContext.todos]);

  return (
    <AppContext.Provider value={{}}>
      <div id="container">
        <div id="titlebar">
          <p>Lista de Afazeres</p>
        </div>
        <div id="content">
          <div id="todos">
            {appContext.filteredTodos.map((todo) => (
              <Todo id={todo.id} name={todo.name} done={todo.done} />
            ))}
          </div>

          <div id="todosContainer">
            <div id="searchBarContainer">
              <div id="searchIcon">
                <BsSearch size={"1.3rem"} color="#00d8f5" />
              </div>
              <input
                id="searchInput"
                type="text"
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  searchTodos(evt);
                }}
              />
            </div>

            <TodosInfo
              total={appContext.todos.length}
              done={doneTodos}
              todo={todoTodos}
            />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
