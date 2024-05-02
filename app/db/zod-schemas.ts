import z from "zod";

export const toggleTodoSchema = z.number();
export const todoTextSchema = z.object({
  text: z.string(),
});
