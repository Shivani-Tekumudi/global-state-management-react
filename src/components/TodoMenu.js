import React, { useState, useEffect } from "react";
import TodoFilterControl from "./TodoFilterControl";

const TodoMenu = ({ todos }) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);

  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    setLeftTodoCount(unCompletedTodos.length);
  }, [todos]);

  return (
    <div className="todo-filter-control">
      <div className="todos-count">{leftTodoCount} items left</div>

      <div className="control-btn group filter-control-for-desktop">
        <TodoFilterControl
        // filterStatus={filterStatus}
        // setFilterStatus={setFilterStatus}
        />
      </div>

      {/* <div className="control-btn">
        <button 
          className="btn" 
          // onClick={() => store.dispatch(clearCompletedTodos())}
        >
          Clear Completed
        </button>
      </div> */}
    </div>
    
  );
};

export default TodoMenu;
