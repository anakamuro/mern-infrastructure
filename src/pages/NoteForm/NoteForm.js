import {createNote} from "../../utilities/notes-api"
import { useState } from "react";

export default function NoteForm() {
    // state is just a POJO
   const [note, setNote] = useState("")

      function handleChange (event) {
            let note = event.target.value
            setNote(note)
        console.log(note)
       }

    async function handleSubmit (event) {
        event.preventDefault()
        createNote(note)
        
    }
        return (
            <div className='form-container'>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <label>Note</label>
                    <input 
                        type='text'
                        onChange={handleChange}
                        required
                    />
                    
                    <button type='submit'>Create Note</button>
                </form>
            </div>
        )
    }
