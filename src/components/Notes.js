import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import { useNavigate } from 'react-router-dom'
import 'tippy.js/dist/tippy.css'

import Tippy from '@tippyjs/react';

const Notes = (props) => {
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
  const [isEdit,setIsEdit]=useState(false);
  
  const ref = useRef(null)
  const refClose = useRef(null)
  
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes, editNote,addNote,swalAlert } = context;
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes()
    } else {
      navigate("/login");
    }

    // eslint-disable-next-line
  }, [])


  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    setIsEdit(true);
  }

  const createNote=()=>{
    ref.current.click();
    setNote({id:"",etitle:"",edescription:"",etag:""})
    setIsEdit(false)
  }

  const handleClick = (e) => {
    if(isEdit){

      editNote(note.id, note.etitle, note.edescription, note.etag)
    swalAlert("success","Updated successfully")
    }else{
      addNote(note.etitle, note.edescription, note.etag)
      swalAlert("success","Added successfully")

    }
    refClose.current.click();
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* <AddNote mode={props.mode} showAlert={props.showAlert} />  */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
          <div className="modal-dialog" >
             <div className="modal-content" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode ===    'dark' ? 'black' : 'white' }} >
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">{isEdit?'Update Note':'Add Note'}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                    <div className="modal-body">
                      <form className="my-3">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor:   props.mode === 'dark' ? 'black' : 'white' }} />
                       </div>
                       <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'black' : 'white' }} />
                       </div>
                       <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tag</label>
                            <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} minLength={5} required style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'black' : 'white' }}/>
                       </div>
                     </form>
                    </div>

                  <div className="modal-footer">
                      <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary" style={{ color: props.mode === 'dark' ? 'black' : 'white', backgroundColor: props.mode === 'dark' ? 'white' : 'black' }}>{isEdit?'Update Note':'Add Note'}</button>
                 </div>
             </div>
          </div>
      </div>
      <div className="row">
          <div className='d-flex justify-content-between my-5'>
              <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>Your Notes</h2>
                 <Tippy content="Add Note">
                     <button className='btn btn-success' onClick={createNote} style={{ borderRadius: "8px", height: "40px", width: "40px" }}>
                        <i className="fa-solid fa-plus" style={{ verticalAlign: "middle" }}></i>
                     </button>
                 </Tippy>
          </div>

      <div className="container mx-2" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}> 
            {notes.length === 0 && 'No notes to display'} 
      </div>
            {notes.map((note) => {
              return <Noteitem mode={props.mode} key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
            })}
      </div>
    </>

  )
}

export default Notes
