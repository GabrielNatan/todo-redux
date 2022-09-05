import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTask } from '../../features/todo/todo-slice'

export const AddTask = ()=>{

  const [task,setTask] = useState("")
  const dispatch = useAppDispatch();

  function handleClick(){
    let newTask = {
      id:`task-${Math.random() * (100 - 1) + 1}`,
      title:task
    }
    dispatch(addTask(newTask))
    setTask("")
  }

  function handleChangeTextInput(event){
    setTask(event.target.value)
  }

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