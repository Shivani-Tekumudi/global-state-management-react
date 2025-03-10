import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import data from "../data/initialTodos"

const TodoWrapper = ({ isDarkMode }) => {
  const [todos, setTodos] = useState(data);

  return (
    <>
      <TodoInput
        isDarkMode={isDarkMode} 
        />
      <TodoList
        todos={todos}
        isDarkMode={isDarkMode} 
        />
    </>
  );
};

export default TodoWrapper;
