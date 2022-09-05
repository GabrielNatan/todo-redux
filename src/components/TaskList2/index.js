
export const TaskList2 = ({list,handleDelete})=>{

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