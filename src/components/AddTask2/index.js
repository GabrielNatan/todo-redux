import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTask } from '../../features/todo/todo-slice'

export const AddTask2 = ({text,handleClick,handleChangeTextInput})=>{

  const [task,setTask] = useState("")
  const dispatch = useAppDispatch();

 

    return(
        <div>
            <input 
                    type="text" 
                    value={task} 
                    onChange={handleChangeTextInput}
                />
                <br></br>
                value: {task}
                <br></br>
                <button 
                    onClick={handleClick}
                >
                    Enviar
                </button>
        </div>
       
    )
}