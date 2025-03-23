import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoWrapper = (/*{ isDarkMode }*/) => {

  return (
    <>
      <TodoInput
        // isDarkMode={isDarkMode} 
        />
      <TodoList
        // isDarkMode={isDarkMode} 
        />
    </>
  );
};

export default TodoWrapper;
