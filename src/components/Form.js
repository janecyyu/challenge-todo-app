import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

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
  const [addTodo, setAddTodo] = useState({
    id: Date.now(),
    title: "",
    description: "",
  });

  const onInputChange = (e) => {
    setInput(e.target.value);
    setAddTodo({ ...addTodo, id: Date.now(), title: e.target.value });
  };

  const onInputBodyChange = (e) => {
    setInputBody(e.target.value);
    setAddTodo({ ...addTodo, description: e.target.value });
  };

  const updateTodo = (title, id, completed, description) => {
    const newTodo = todo.map((t) =>
      t.id === id ? { title, id, completed, description } : t
    );
    console.log("new", newTodo);
    axios
      .put(`https://jane-todo-list-api.herokuapp.com/${id}`, {
        title,
        id,
        completed,
        description,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

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
    console.log(addTodo);
    if (!editTodo && addTodo.title.length > 0) {
      axios
        .post("https://jane-todo-list-api.herokuapp.com/", addTodo)
        .then((res) => {
          console.log(res);
          setTodo([...todo, addTodo]);
          setInput("");
          setInputBody("");
        })
        .catch((err) => console.log(err));
    } else {
      console.log("update", editTodo);
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
