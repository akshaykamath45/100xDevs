import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  const [title, setTitle] = useState("harkirat");

  return (
    <>
      <button onClick={() => setTitle(Math.random())}>
        Click me to change title
      </button>

      <Header title={`My name is  ${title}`} />
      <Header title={"My name is raman"} />
      <Header title={"My name is raman"} />
      <Header title={"My name is raman"} />
      <Header title={"My name is raman"} />
      <Header title={"My name is raman"} />
      <Header title={"My name is raman"} />
      <Header title={"My name is raman"} />
    </>
  );
}

export default App;
