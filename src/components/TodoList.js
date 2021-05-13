import React from "react";

const TodoList = ({ todo, setTodo }) => {
  return (
    <div>
      {todo.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            className="list"
            type="text"
            value={todo.title}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button className="button-complete task-button">
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button">
              <i className="fa fa-edit"></i>
            </button>
            <button className="button-delete task-button">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
