import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({
  input,
  setInput,
  todo,
  setTodo,
  editTodo,
  setEditTodo,
  setInputBody,
  inputBody,
}) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onInputBodyChange = (e) => {
    setInputBody(e.target.value);
  };

  const updateTodo = (title, id, completed, body) => {
    const newTodo = todo.map((t) =>
      t.id === id ? { title, id, completed, body } : t
    );
    setTodo(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
      setInputBody(editTodo.description);
    } else {
      setInput("");
      setInputBody("");
    }
  }, [setInput, editTodo, setInputBody]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodo([
        ...todo,
        { id: uuidv4(), title: input, completed: false, body: inputBody },
      ]);
      setInput("");
      setInputBody("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed, inputBody);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Enter a Todo Title..."
        value={input}
        onChange={onInputChange}
        required
      />
      <input
        className="task-input-body"
        type="text"
        placeholder="Description..."
        value={inputBody}
        onChange={onInputBodyChange}
        required
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
