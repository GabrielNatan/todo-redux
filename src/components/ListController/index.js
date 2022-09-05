import { useState } from "react"

export const ListController = ({layout,addTask,taskList})=>{

    const [task, setTask] = useState("")
    const [list,setList] = useState([])
    function handleClick(){
        let newTask = {
          id:`task-${Math.random() * (100 - 1) + 1}`,
          title:task
        }
        setList(p=>{return {...p,newTask}})
        setTask("")
      }
    
      function handleChangeTextInput(event){
        setTask(event.target.value)
      }
      function handleDelete(id){
        let newList = list.filter(item=>item.id != id)
        setList(newList)
      }

    return(
        <div>

            {layout(
                ()=>{
                    return addTask({
                        handleClick,
                        handleChangeTextInput,
                        task
                    })
                },
                ()=>{
                    return taskList({
                        handleDelete
                    })
    
                }
            )}
        </div>
    )
}