import React, { useState } from "react";
import "./App.css";

function App() {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;
  const [value, setValue] = useState("");

  const eraseInput = () => {
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(value);
    eraseInput();
  };

  const handleKeyPress = (event) => {
    if (event.which === ENTER_KEY) {
      handleSubmit();
    } else if (event.which === ESCAPE_KEY) {
      eraseInput();
    }
  };
  return (
    <section id="app" className="container">
      <header>
        <div className="title">Todo</div>
      </header>
      <section className="main">
        <input
          type="text"
          className="new-todo"
          placeholder="o que precisar ser feito?"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </section>
    </section>
  );
}

export default App;
