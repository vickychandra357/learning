import React ,{useState} from "react";
import './App.css';
import Main from "./Component/Main";
import Hello from "./Component/Hello/Hello";

function App() {
  const [count,setCount]=useState(0);

  const handleClick=()=>{
    setCount(count+1);
  }
  return (
    <div className="App">
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>

      <div>
        <Main/>
      </div>
      <div>
        <Hello/>
      </div>
    </div>
    
  );
}

export default App;


function MyButton({count,onClick}){
  return(
    <button onClick={onClick}>Click {count} times</button>
  )
}
