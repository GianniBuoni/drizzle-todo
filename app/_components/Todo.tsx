"use client";
import React from "react";
import { todoType } from "../_lib/definitions";
import clsx from "clsx";
import { toggleTodo } from "../db/todoActions";
import { useRouter } from "next/navigation";

interface Props {
  todo: todoType;
}

const Todo = ({ todo }: Props) => {
  const router = useRouter();
  const todoCard = clsx({
    "form-control card p-5 opacity-80 w-2/5 transition-colors": true,
    "bg-base-200": todo.done,
    "bg-accent": !todo.done,
  });

  const toggleStyles = clsx({ "toggle toggle-primary opacity-100": true });

  const handleChange = (data: todoType["id"]) => {
    toggleTodo(data);
    router.refresh();
  };

  return (
    <div className={todoCard}>
      <label className="label cursor-pointer">
        <span className="label-text">{todo.text}</span>
        {todo.done ? (
          <input
            type="checkbox"
            defaultChecked
            className={toggleStyles}
            onChange={() => handleChange(todo.id)}
          />
        ) : (
          <input
            type="checkbox"
            className={toggleStyles}
            onChange={() => handleChange(todo.id)}
          />
        )}
      </label>
    </div>
  );
};

export default Todo;
