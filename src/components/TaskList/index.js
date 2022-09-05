import {useAppSelector,useAppDispatch} from '../../app/hooks'
import { addTask, deleteTask } from '../../features/todo/todo-slice'
export const TaskList = ()=>{
    const list = useAppSelector((state)=> state.list.value);
    const dispatch = useAppDispatch();
    function handleDelete(id){
        let newList = list.filter(item=>item.id != id)
        dispatch(deleteTask(newList))
      }
    return(
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
    )
}