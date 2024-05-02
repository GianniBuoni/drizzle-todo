import React from "react";
import { todoType } from "../_lib/definitions";
import Todo from "./Todo";

interface Props {
  todos: todoType[];
}

const TodoHub = ({ todos }: Props) => {
  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoHub;
