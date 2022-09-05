import { TaskList } from '../../components/TaskList';
import { AddTask } from '../../components/AddTask';


export const Home = ()=>{

    return (
        <div className="App">
         <AddTask/>
          
          <br></br><br></br>
          <hr></hr>
          
          <strong>TODO</strong>
          {/* <TaskList handleDelete={handleDelete} list={list}/> */}
          <TaskList/>

        </div>
      );
}