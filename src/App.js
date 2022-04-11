import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import MyButton from "./components/MyButton";
import { useEffect, useState } from "react";

const showMessage = (e) => {
  console.log("show message " + e);
};

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <>
      <Hello name="sujan maka" salary={10000.0} />

      <MyButton onClick={showMessage}>mug</MyButton>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

export default App;
