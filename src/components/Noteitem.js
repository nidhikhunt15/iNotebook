import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import Swal from 'sweetalert2'

const Noteitem = (props) => {
    const context = useContext(noteContext);

    const { deleteNote } = context;
    const { note, updateNote } = props;

    const deleteConfirm =()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteNote(note._id)
              Swal.fire(
                'Deleted!',
                'Your note has been deleted.',
                'success'
              )
            }
          })
    }

    return (
        <div className='col-md-3'>
            <div className="card my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'black' : 'white' }} >
                <div style={{display:'flex',justifyContent:'flex-end' ,position:'absolute' ,right:'21px', top:"1px" }}>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        {note.tag}
                        </span>
                </div>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                            <Tippy content="Edit">
                            <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateNote(note) }} style={{ color: props.mode === 'dark' ? 'green' : 'blue' }}></i>
                            </Tippy>
                            <Tippy content="Delete">
                            <i className="fa-solid fa-trash text-danger" onClick={deleteConfirm} ></i>
                            </Tippy>
                    </div>
                            <p className="card-text">{note.description} </p>
                </div>
            </div>
        </div>
    )
}
export default Noteitem



