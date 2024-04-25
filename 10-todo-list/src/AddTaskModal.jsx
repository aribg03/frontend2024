import withReactContent from "sweetalert2-react-content"
import {useForm} from "./Hooks/useForm"
import Swal from "sweetalert2"

const taskInfo = {
    task: '',
    description: '',
    location: '',
    limit: '',
}

const AddTaskModal = ({taskList, setTaskList}) => {
    const [values, HandleInputChange, reset] = useForm(taskInfo)

    const MySwal = withReactContent(Swal)

    const handleSaveClick = () => {
        const newTaskList = [...taskList,{
            id: taskList.length +1,
            ...values,
            done:false
        }]
        
        setTaskList(newTaskList)

        localStorage.setItem('taskList', JSON.stringify(newTaskList))
        reset()

        MySwal.fire({
            icon: 'success',
            title: "Task added"
        })
    }

    return(
        <div className="modal fade" id={"AddTaskModal"}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div  className="modal-header">
                        <h1 className="modal-title"
                            id="AddTaskModalLabel">Add New Task
                        </h1>
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