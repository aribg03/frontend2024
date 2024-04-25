import Listitem from "./Listitem"

const List=({taskList})=>{


return (
    
    <>
    
    <div className="row m-2">
      <div className="col-6">
<h4> Tasks</h4>
      </div>
      <div className="col-2">
<h4>Limit </h4>
      </div>
      <div className="col">
<h4>Location</h4>
      </div>
      <div className="col-1">


      </div>
    </div>
    {
        taskList.map((task)=>{
            return(
                <Listitem
                key={task.id}
                task={task}

                />
            )
        }
    )
    }
   
   </>

  )
}
export default List