import React, { useContext } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";
import { AppContext } from "../context/AppContext";

interface iTodoProps {
  id: number;
  name: string;
  done: boolean;
}

const Todo: React.FC<iTodoProps> = (props) => {
  const { id, name, done } = props;

  const { appContext, setAppContext } = useContext(AppContext);

  const toggleTodo = () => {
    setAppContext((prev) => {
      const updatedTodos = appContext.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      );

      return {
        todos: updatedTodos,
        filteredTodos: updatedTodos,
      };
    });
  };

  const handleDeleteTodoOnClick = () => {
    setAppContext({
      ...appContext,
      filteredTodos: appContext.filteredTodos.filter((todo) => todo.id !== id),
    });
  };

  return (
    <div className="todo">
      <div>
        <p>ID: {id}</p>
      </div>

      <div>
        <p>{name}</p>
      </div>

      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <div>
          <p>Feito: </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={toggleTodo}
        >
          {done ? (
            <BsCheckCircleFill size={"1.3rem"} color="green" />
          ) : (
            <IoIosCloseCircle size={"1.3rem"} color="red" />
          )}
        </div>
        <div onClick={handleDeleteTodoOnClick}>
          <IoMdTrash size={"1.3rem"} className="todoBotaoExcluir" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
