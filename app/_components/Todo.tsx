"use client";
import { todoType } from "../_lib/definitions";
import clsx from "clsx";
import { deleteTodo, toggleTodo } from "../db/todoActions";
import { useRouter } from "next/navigation";
import { TiDelete } from "react-icons/ti";
import TodoLabel from "./TodoLabel";

interface Props {
  todo: todoType;
}

const Todo = ({ todo }: Props) => {
  const router = useRouter();

  const todoCard = clsx({
    "flex flex-row space-x-4 items-center card p-4 opacity-80 transition-colors":
      true,
    "bg-base-200": todo.done,
    "bg-accent": !todo.done,
  });

  const toggleStyles = clsx({ "toggle toggle-primary opacity-100": true });

  const handleToggle = (data: todoType["id"]) => {
    toggleTodo(data);
    router.refresh();
  };

  const handleDelete = (data: todoType["id"]) => {
    deleteTodo(data);
    router.refresh();
  };

  return (
    <div className={todoCard}>
      <div>
        <TiDelete
          className="cursor-pointer"
          onClick={() => handleDelete(todo.id)}
        />
      </div>
      <div className="flex flex-row justify-between w-full">
        <TodoLabel todo={todo} />
        {todo.done ? (
          <input
            type="checkbox"
            defaultChecked
            className={toggleStyles}
            onChange={() => handleToggle(todo.id)}
          />
        ) : (
          <input
            type="checkbox"
            className={toggleStyles}
            onChange={() => handleToggle(todo.id)}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
