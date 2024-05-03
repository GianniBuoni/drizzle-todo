import React from "react";
import { todoType } from "../_lib/definitions";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import dynamic from "next/dynamic";

interface Props {
  todos: todoType[];
}

const TodoHub = ({ todos }: Props) => {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <AddTodo />
    </div>
  );
};

export default TodoHub;
