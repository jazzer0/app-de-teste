import React from "react";
import "./App.css";

function App() {
  return (
    <div id="container">
      <div id="titlebar">
        <p>App de Todo</p>
      </div>
      <div id="content">
        <div id="todos">
          <div className="todo">
            <div>
              <p>ID: 0</p>
            </div>
            <div>
              <p>Ir ao Supermercado</p>
            </div>
            <div>
              <p>Feito: Não</p>
            </div>
          </div>
        </div>
        <div id="todosInfo">
          <div className="todoInfo">
            <p>Todal: 10</p>
          </div>
          <div className="todoInfo">
            <p>Feitos: 5</p>
          </div>
          <div className="todoInfo">
            <p>Falta fazer: 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
