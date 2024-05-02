import React from "react";
import { getData } from "./db/todoActions";
import TodoHub from "./_components/TodoHub";

const HomePage = async () => {
  const data = await getData();
  return (
    <div>
      <h1>Todo:</h1>
      <TodoHub todos={data} />
    </div>
  );
};

export default HomePage;
export const revalidate = 0;
