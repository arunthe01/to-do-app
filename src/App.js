// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import Form from "./comp/Form"
import Todolist from './comp/Todolist';



function App() {

const [input,setInput] = useState("");
const[todos,setTodo] = useState([]);


  return (

 <div className='main'>
    <div className="App">
      <h1 className='heading'> TO-DO </h1>
      <div className='stick'>
        <Form input={input} setInput={setInput} todos={todos} setTodo={setTodo}/>
        <Todolist todos={todos} setTodo={setTodo}/>
        </div>
    </div>
  </div>
  );
}

export default App;
