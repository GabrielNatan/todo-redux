import { useState } from 'react';
import { addTask, deleteTask } from './features/todo/todo-slice'
import {useAppSelector,useAppDispatch} from './app/hooks'

function App() {
  const [task,setTask] = useState("")

  const list = useAppSelector((state)=> state.list.value);
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

  function handleDelete(id){
    let newList = list.filter(item=>item.id != id)
    dispatch(deleteTask(newList))
  }

  return (
    <div className="App">
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
      
      <br></br><br></br>
      <hr></hr>
      
      <strong>TODO</strong>
      <ul>
        {
          list.map(each=>{
            return(
              <li key={each.id}>
                  {each.title}  
                  <button onClick={()=>handleDelete(each.id)}>Delete</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
