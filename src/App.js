import React, { Component, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
          />
        </div>
        <div>
          <TodoList todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
