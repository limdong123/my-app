import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, settoDO] = useState("");
  const [toDos, settoDos] = useState([]);   //todo 모이는 array
  const onChange = (event) => settoDO(event.target.value);
  const onSubmit = (event) => {     
    event.preventDefault();    //submit으로 새로고침되는걸 방지
    if (toDo === "") {
      return;
    }
    settoDos(currentArray => [toDo, ...currentArray]) //'...'으로 []의 엘리멘트를 가져올수있다.
    //toDos.push() -> state를 직접적으로 수정 할 수 없다.
    settoDO("");
  };
  console.log(toDos);
  return (
    <div>
      <h1> My To Dos ({toDos.length}) </h1>
      <form onSubmit={onSubmit}>  
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
