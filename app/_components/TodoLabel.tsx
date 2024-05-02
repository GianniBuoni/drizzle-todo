import React, { useState } from "react";
import { todoType } from "../_lib/definitions";
import { Field, FieldValues, useForm } from "react-hook-form";
import { editTodo } from "../db/todoActions";
import { useRouter } from "next/navigation";

interface Props {
  todo: todoType;
}

const TodoLabel = ({ todo }: Props) => {
  const [editing, setEditing] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handlePost = (data: FieldValues) => {
    editTodo(todo.id, data.text);
    setEditing(!editing);
    router.refresh();
  };

  if (editing)
    return (
      <form onSubmit={handleSubmit(handlePost)}>
        <input
          defaultValue={todo.text}
          className="input input-sm input-bordered"
          {...register("text")}
        />
      </form>
    );
  return (
    <div className="label-text mt-0.5" onClick={handleEdit}>
      {todo.text}
    </div>
  );
};

export default TodoLabel;
