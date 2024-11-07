import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NewComponent from "./component/newComponent.jsx";
import "./App.css";

const ItemComponent = ({ nama, price }) => {
  return (
    <div>
      <h2>{nama}</h2>
      <p>Rp. {price}</p>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Hello
      <NewComponent props={"passing value via Props"} />
      <ItemComponent nama={"bintang"} price={"20.000"} />
      <ItemComponent nama={"bulan"} price={"30.000"} />
    </>
  );
}

export default App;
