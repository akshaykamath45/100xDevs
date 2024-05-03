import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleOnClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleOnClick}>Increase count</button>
    </div>
  );
}

export default App;
