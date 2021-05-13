import React from "react";

const TodoList = ({ todo, setTodo, setEditTodo }) => {
  const handleComplete = (task) => {
    setTodo(
      todo.map((item) => {
        if (item.id === task.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todo.find((t) => t.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodo(todo.filter((todo) => todo.id != id));
  };
  return (
    <div>
      {todo.map((task) => (
        <li className="list-item" key={task.id}>
          <input
            className="list"
            type="text"
            value={task.title}
            className={`list ${task.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(task)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(task)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(task)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
