import { useState } from "react";

import NoteContext from "./noteContext";
import Swal from "sweetalert2";

const NoteState =(props)=>{
    const host="http://localhost:5000"
   const noteInitial= []
      const[notes,setNotes]=useState(noteInitial)
    
        //Get all note
        const getNotes = async()=> {
             // API Call 
             const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                 method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token" :localStorage.getItem('token')
                }
              });
              const json =await response.json()
              console.log(json)
              setNotes(json)
          }
    

      //Add a note
      const addNote = async(title,description,tag)=> {
        //TODO: API call
         // API Call 
         const response = await fetch(`${host}/api/notes/addnote`, {
         method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token" :localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
          });
          const note=await response.json();
          setNotes(notes.concat(note))
         }

     //delete a note
      const deleteNote = async(id)=> {
         // API call
         const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token" :localStorage.getItem('token')
            }
          });
         const json = response.json();
         console.log(json)
       
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)

      }

      //edit a note
      const editNote = async(id,title,description,tag)=> {
            // API Call 
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token" :localStorage.getItem('token')
                },
                body: JSON.stringify({title,description,tag})
              });
              const json = await response.json();
              console.log(json)
 
             let newNotes = JSON.parse(JSON.stringify(notes))

            // Logic to edit in client


        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id ){
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag; 
                break; 

            }
            
            }  
            setNotes(newNotes);
          }


    const swalAlert =async(icon,title)=>{
        Swal.fire({
            position: 'center',
            icon: icon,
            title: title,
            showConfirmButton: false,
            timer: 1500
          })
    }


    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes,swalAlert}}>
           {props.children}
        </NoteContext.Provider>
    )


}


export default NoteState;