import React from "react";
import { todoType } from "../_lib/definitions";

interface Props {
  todo: todoType;
}

const Todo = ({ todo }: Props) => {
  if (todo.done)
    return (
      <div className=" form-control card bg-base-200 p-5 opacity-80 w-2/5 transition-colors">
        <label className="label cursor-pointer">
          <span className="label-text">{todo.text}</span>
          <input
            type="checkbox"
            checked
            className="toggle toggle-primary opacity-100"
          />
        </label>
      </div>
    );
  return (
    <div className=" form-control card bg-accent p-5 opacity-80 w-2/5 transition-colors">
      <label className="label cursor-pointer">
        <span className="label-text">{todo.text}</span>
        <input type="checkbox" className="toggle toggle-primary opacity-100" />
      </label>
    </div>
  );
};

export default Todo;
