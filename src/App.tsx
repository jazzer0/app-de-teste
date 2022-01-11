import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodosInfo from "./components/TodosInfo";
import { AppContext } from "./context/AppContext";
import { BsSearch } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { todos } from "./constants/todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [appContext, setAppContext] = useState({
    todos,
    filteredTodos: todos,
  });

  const [doneTodos, setDoneTodos] = useState(0);
  const [todoTodos, setTodoTodos] = useState(0);
  const [addTodoRender, setAddTodoRender] = useState(false);

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

  const handleToggleAddTodo = () => {
    setAddTodoRender((prev) => !prev);
  };

  useEffect(() => {
    setDoneTodos(getDoneTodos());
    setTodoTodos(getTodoTodos());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appContext.todos]);

  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      <div id="container">
        <div id="titlebar">
          <p>Lista de Afazeres</p>
        </div>
        <div id="content">
          {addTodoRender ? (
            <AddTodo />
          ) : (
            <div id="todos">
              {appContext.filteredTodos.map((todo) => (
                <Todo id={todo.id} name={todo.name} done={todo.done} />
              ))}
            </div>
          )}

          <div id="todosContainer">
            <div id="searchBarContainer">
              <div id="searchIcon">
                <BsSearch size={"2.5rem"} color="#01cdfe" />
              </div>
              <input
                id="searchInput"
                type="text"
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  searchTodos(evt);
                }}
              />
              <div id="addButtonContainer" onClick={handleToggleAddTodo}>
                <IoMdAddCircle size={"2.5rem"} color="white" />
              </div>
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
