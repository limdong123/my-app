import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello(){
  useEffect(() => {
    console.log("created :)");  //HTML 생성하면서 작동
    return () => console.log("destroyed :("); //HTML삭제하면서 작동
  }, []);
  return <h1> Hello </h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev );

  return (
    <div>
      {showing ? <Hello/> :null}
      <button onClick={onClick}> {showing ? "hide" : "show"} </button>
    </div>
  );
}

export default App;
