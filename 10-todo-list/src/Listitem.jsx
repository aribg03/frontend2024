import ShowItemModal from "./ShowItemModal"
import React from "react"
const Listitem = ({task, limit}) => {
    return(
        <>
        <div className = "row m-2">
            <div className = "col-6">
            <ShowItemModal />
            <button 
                class="btn btn-link" 
                data-bs-toggle="modal" 
                data-bs-target="#showItemModal">{task}</button>
            </div>
            <div className='col-2'>
            {limit}
            </div>
            <div className='col'>
                <button className='btn btn-sm btn-outline-primary'>
                <i className="bi bi-pencil-square"></i>
                </button>
                <button className='btn btn-sm btn-outline-danger'>
                <i className="bi bi-trash"></i>
            </button>
            </div>
        </div>
        </>
    )
}
export default Listitem
