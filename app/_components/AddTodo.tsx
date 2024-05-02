"use client";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";

const AddTodo = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await axios.post("/api/todos", data);
    reset();
    router.refresh();
  };

  return (
    <form
      className="flex w-full mt-3 space-x-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="New Todo . . . "
        className="input input-bordered"
        {...register("text")}
      />
      <button type="submit" className="btn btn-primary">
        Submit!
      </button>
    </form>
  );
};

export default AddTodo;
