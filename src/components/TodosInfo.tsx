import React from "react";

interface iTodoInfoProps {
  total: number;
  done: number;
  todo: number;
}

const TodosInfo: React.FC<iTodoInfoProps> = (props) => {
  const { total, done, todo } = props;

  return (
    <div id="todosInfo">
      <div className="todoInfo">
        <p>Total: {total}</p>
      </div>
      <div className="todoInfo">
        <p>Feitos: {done}</p>
      </div>
      <div className="todoInfo">
        <p>Falta fazer: {todo}</p>
      </div>
    </div>
  );
};

export default TodosInfo;
