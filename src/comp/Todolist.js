import "./Todolist.css";
import React from "react";
import { useState } from "react";

function Todo({todos,setTodo}){


  const [edit,setedit] = useState("");

  const ondelete = ({id})=>{

    setTodo(todos.filter((item)=> item.id !== id))
      
  };

  const onedit = ({item})=>{

      
      
  };
  const  textchange = (e)=>{

     setedit(e.target.value);

  };
 

  return(

    
        
    <div className="icon-cont">

        {
             todos.map((item,index)=>(
                    
                  <div className="list"> 
                  
                           <div className="title">  {item.title} </div>
                          <div className="opt ">
                                <input type="checkbox" className="check" onChange={textchange}/>


                                {/* <button className="del"  onClick= {()=>onedit(item)}>  EDIT</button> */}
                                
                                
                                <button className="del"  onClick= {()=>ondelete(item)}>  DELETE</button>
                            </div>
                  </div>
                    
             )
             
             
             
             
             )
        }

      </div>
      
  

  );


}
export default Todo;