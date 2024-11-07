import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NewComponent from "./component/newComponent.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Hello
      <NewComponent props={"passing value via Props"} />
    </>
  );
}

export default App;
