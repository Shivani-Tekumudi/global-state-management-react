import React from "react";
import IconCheck from "../images/icon-check.svg";

const TodoListItem = ({ todo }) => {

  const classes = todo.completed ? "completed" : "";
  const checkIcon = todo.completed ? (
    <img src={IconCheck} alt="Completed" />
  ) : (
    ""
  );

  return (
    <li className={classes}>
      <label htmlFor={`todoCheckbox-${todo.id}`}>Completed Checkbox</label>
      <input
        id={`todoCheckbox-${todo.id}`}
        type="checkbox"
        name="completed-checkbox"
        defaultChecked={todo.completed}
      />
      <div className="checkbox-border-wrap">
        <span className="checkbox">
          {checkIcon}
        </span>
      </div>
      <p>{todo.content}</p>
    </li>
  );
};

export default TodoListItem;
