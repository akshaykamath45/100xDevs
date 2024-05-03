import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomButton from "../components/CustomButton";
function App() {
  const [count, setCount] = useState(0);
  const handleOnClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <CustomButton count={count} handleOnClick={handleOnClick}></CustomButton>
    </div>
  );
}

export default App;
