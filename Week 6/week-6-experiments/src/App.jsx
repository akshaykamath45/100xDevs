import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <>
      <HeaderWithButton />
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

function HeaderWithButton() {
  const [title, setTitle] = useState("harkirat");

  return (
    <>
      <button onClick={() => setTitle(Math.random())}>
        Click me to change title
      </button>
      {title}
    </>
  );
}

export default App;
