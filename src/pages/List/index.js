import { ListController } from "../../components/ListController"
import { AddTask } from "../../components/AddTask"
import { TaskList } from "../../components/TaskList"
export const List = ()=>{

    const DesktopLayout = (addTask,taskList)=>{
        console.log(typeof addTask)
        return(
            <div>
                <div>
                    {addTask()}
                </div>
                <div>
                    {taskList()}
                </div>
            </div>
        )
    }


    return(
        <div >
            <ListController
                layout={DesktopLayout}
                addTask={AddTask}
                taskList={TaskList}
            />  

        </div>
        
            
    )
}