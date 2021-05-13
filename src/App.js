import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header></Header>
          </div>
          <div>
            <Form></Form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
