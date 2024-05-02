import React from "react";
import { todoType } from "../_lib/definitions";
import clsx from "clsx";

interface Props {
  todo: todoType;
}

const Todo = ({ todo }: Props) => {
  const todoCard = clsx({
    "form-control card p-5 opacity-80 w-2/5 transition-colors": true,
    "bg-base-200": todo.done,
    "bg-accent" : !todo.done
  });

  const toggleStyles = clsx({"toggle toggle-primary opacity-100": true,});

    return (
      <div className={todoCard}>
        <label className="label cursor-pointer">
          <span className="label-text">{todo.text}</span>
          {todo.done
            ? <input type="checkbox" defaultChecked className={toggleStyles} />
            : <input type="checkbox" className={toggleStyles} />
          }
        </label>
      </div>
    );
};

export default Todo;
