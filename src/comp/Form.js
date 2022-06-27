import './Form.css';
import React from 'react';
import {v4 as uuidv4} from "uuid";

function Form({input,setInput,todos,setTodo}){

const addData = (event)=>{
      setInput(event.target.value);

};

const deldata = (event)=>{
    event.preventDefault();
    setTodo([...todos,{id:uuidv4(),title:input , completed:false}]);
    setInput("");
};

    

    return(
    
            <form className='inp' onSubmit={deldata}>
                    <input type="text" className='input-box' value={input}required onChange={addData}/>
                    <button className='add-list-btn' type='submit'>ADD</button>
            </form>
    
    
    );
}

export default Form;