import React, { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoMenu from "./TodoMenu";

const TodoList = ({ todos, isDarkMode }) => {
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    const handleFilterTodos = (todos, filterStatus) => {
      switch (filterStatus) {
        case "active":
          setFilteredTodos(todos.filter((todo) => !todo.completed));
          break
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed));
          break  
        default:
          setFilteredTodos(todos)
          break
      }
    };

    handleFilterTodos(todos, "all")
  }, [])

  return (
    <>
      <section
        className={`todo-list-section ${
          isDarkMode && "todo-list-section-dark"
        }`}
      >
        {filteredTodos.length < 1 ? (
          <p className="info-text">There's no todos</p>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map((todo, i) => (
              <TodoListItem
                todo={todo}
                key={todo.id}
                todos={todos}
              />
            ))}
          </ul>
        )}

        <TodoMenu todos={todos} />
      </section>
    </>
  );
};

export default TodoList;
