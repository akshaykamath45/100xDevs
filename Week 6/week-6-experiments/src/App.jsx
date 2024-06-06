import { useState, memo } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  const [title, setTitle] = useState("harkirat");
  // const Header = memo(function Header({ title }) {
  //   return <div>{title}</div>;
  // });
  function updateTitle() {
    setTitle(Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Click me to change title</button>

      <Header title={title} />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title={"My name is raman"} />
      <Header title={"My name is raman"} />
      <Header title={"My name is raman"} />
      <Header title={"My name is raman"} />
      <Header title={"My name is raman"} />
      <Header title={"My name is raman"} />
    </div>
  );
}

export default App;
