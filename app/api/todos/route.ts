import { NextResponse } from "next/server";
import { todoTextSchema } from "@/app/db/zod-schemas";
import db from "@/app/db/drizzle";
import { todo } from "@/app/db/schema";
import { revalidatePath } from "next/cache";

export async function POST(response: NextResponse) {
  const body = await response.json();
  const validation = todoTextSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newTodo = await db.insert(todo).values({
    text: body.text,
  });
  revalidatePath("/");
  return NextResponse.json(newTodo);
}
