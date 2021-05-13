import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todo, setTodo, editTodo, setEditTodo }) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todo.map((t) =>
      t.id === id ? { title, id, completed } : t
    );
    setTodo(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={onInputChange}
        required
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
