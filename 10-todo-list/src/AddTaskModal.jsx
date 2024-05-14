import React from "react"
import withReactContent from "sweetalert2-react-content"
import {useForm} from "./Hooks/useForm"
import Swal from "sweetalert2"
import {v4 as uuidv4} from 'uuid'

const taskInfo = {
    task: '',
    description: '',
    location: '',
    limit: '',
}

const AddTaskModal = ({task = null, taskList, setTaskList}) => {
    const [values, HandleInputChange, reset] = useForm(task || taskInfo)

    const MySwal = withReactContent(Swal)

    const handleSaveClick = () => {
        let newTaskList = []
        if (task) {
            newTaskList = taskList.map((taskItem) => {
                if (taskItem.id === task.id){
                    task.task = values.task
                    task.description = values.description
                    task.location = values.location
                    task.limit = values.limit
                }
                return taskItem
            })
        } else {
            newTaskList = [...taskList,{
                id: uuidv4(),
                ...values,
                done:false
            }]
        }      
        
        setTaskList(newTaskList)

        localStorage.setItem('taskList', JSON.stringify(newTaskList))
        reset()

        MySwal.fire({
            icon: 'success',
            title: task ? 'Task updated' : 'Task added'
        })
    }

    const id = task?.id || ''

    return(
        <div className="modal fade" id={"AddTaskModal"+id}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div  className="modal-header">
                        <h5 className="modal-title"
                            id="AddTaskModalLabel"
                            >{task ? "Edit Task" : "Add New Task"}
                        </h5>
                        <button 
                            type="button" className="btn-close" 
                            data-bs-dismiss="modal">
                        </button>

                    </div>
            
                    <div className="modal-body ">
                        <div className="modal-body container">
                        <div className="row text-start">
                            <div className="col">
                                <label
                                    className="form-label"
                                    htmlFor="task"
                                >Task</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="task"
                                    name="task"
                                    onChange={HandleInputChange}
                                    value={values.task}
                                /> 

                                <label
                                    className="form-label"
                                    htmlFor="descroption"
                                >Description</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    onChange={HandleInputChange}
                                    value={values.description}
                                /> 


                                <label
                                    className="form-label"
                                    htmlFor="location"
                                >Location</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="location"
                                    name="location"
                                    onChange={HandleInputChange}
                                    value={values.location}
                                /> 

                                <label
                                    className="form-label"
                                    htmlFor="description"
                                >Limit Time</label>
                                <input 
                                    type="time"
                                    className="form-control"
                                    id="limit"
                                    name="limit"
                                    onChange={HandleInputChange}
                                    value={values.limit}
                                /> 
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button 
                            className='btn btn-sm btn-outline-primary'
                            onClick={handleSaveClick} 
                            data-bs-dismiss="modal"
                        >
                            <i className="bi bi-pencil-square"></i>Save
                        </button> 
                        <button 
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-dismiss="modal"
                        >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddTaskModal