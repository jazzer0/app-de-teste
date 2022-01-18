import React, { createContext } from "react";

interface ITodos {
  id: string;
  name: string;
  done: boolean;
}

interface IAppContextData {
  todos: ITodos[];
  filteredTodos: ITodos[];
}

interface IAppContextType {
  appContext: IAppContextData;
  setAppContext: React.Dispatch<React.SetStateAction<IAppContextData>>;
}

export const AppContext = createContext<IAppContextType>(null as any);
