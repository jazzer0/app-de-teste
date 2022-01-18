import { v4 as uuidV4 } from "uuid";

export const todos = [
  {
    id: uuidV4(),
    name: "Estudar JS",
    done: true,
  },
  {
    id: uuidV4(),
    name: "Fazer Compras",
    done: false,
  },
  {
    id: uuidV4(),
    name: "Jogar CS",
    done: false,
  },
  {
    id: uuidV4(),
    name: "Fazer Comida",
    done: false,
  },
];
