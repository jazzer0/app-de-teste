import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

interface iTodoProps {
  id: number;
  name: string;
  done: boolean;
}

const Todo: React.FC<iTodoProps> = (props) => {
  const { id, name, done } = props;

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
          onClick={() => {
            alert("clicou");
          }}
        >
          {done ? (
            <BsCheckCircleFill size={"1.3rem"} color="green" />
          ) : (
            <IoIosCloseCircle size={"1.3rem"} color="red" />
          )}
        </div>
        <div>
          <IoMdTrash size={"1.3rem"} className="todoBotaoExcluir" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
