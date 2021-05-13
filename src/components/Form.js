import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todo, setTodo }) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, { id: uuidv4(), title: input, complete: false }]);
    setInput("");
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
        Add
      </button>
    </form>
  );
};

export default Form;
