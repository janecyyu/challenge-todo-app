import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    axios
      .get("https://jane-todo-list-api.herokuapp.com/")
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const initialState = JSON.parse(localStorage.getItem("todo")) || [];

  // useEffect(() => {
  //   localStorage.setItem("todo", JSON.stringify(todo));
  // }, [todo]);

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
            inputBody={inputBody}
            setInputBody={setInputBody}
            todo={todo}
            setTodo={setTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList todo={todo} setTodo={setTodo} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
