import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import deleteIcon from "./delete-icon.png";
import editIcon from "./edit-icon.png";
function Home() {

    const [notes, setNotes] = useState();

    const [title,setTitle] = useState();
    const[description ,setDescription] = useState();
    const [priority , setPriority] = useState();


    const loadNotes = async () => {
        try {
            const response = await axios.get('/api/v1/notes');
            setNotes(response?.data?.data);
            console.log(response?.data?.data);
        }
        catch (err) {
            console.log(err);
            alert("Error Loading notes !!")
        }
    };
    const addNotes = async () => {

       const  response = await axios.post ('/api/v1/notes',{
        title:title,
        priority:priority,
        description:description
        
       })
       console. log (response?.data?.data)

       if(response?.data?. success){
     alert(response?.data?.message);
       }
       else{
        alert(response?.data?.message);
       }
       loadNotes();

    }


       const  deleteNote = async (_id) => {
        const  response = await axios.delete (`/api/v1/notes/${_id}`);

        if (response?.data?.success) {
            alert(response?.data?.message);

            loadNotes();

        }

        

       }
    useEffect(() => {
        loadNotes();
    }, [notes])


    return (
        <>
            <h1 className='text-center'>Note  Taking</h1>

            <div className='Main-Div-notes'>
                <div>
                    <h1 className='text-center'>Show Notes</h1>

                    <div>
                        {
                            notes?.map((notes, index) => {
                                const { title, description, priority ,_id } = notes;
                                return (
                                
                                        <div className='notes-card'>
                                            <h3>{title}</h3>
                                            <a href='/edit'><img src = {editIcon} alt ='edit' className='edit-icon' /></a>
                                            <br/>
                                            <hr />
                                            <img src={ deleteIcon} alt='delete' className='delete-icon' onClick={() => {deleteNote (_id)}} />
                                            
                                            <p className='note-description'>{description}</p>
                                            <p className='note-priority'>{priority}</p>
                                            
                                        </div>
                               
                                ) })
                        }
                    </div>
                </div>
                <div className='add-notes-form'>
                    <div>
                    <h1 className='text-center'>Add Notes</h1>
                    <form >

                        <input 
                        className='input-box'
                        type='text' 
                        placeholder='Enter Title'
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        />
                        <br/>

                        <input
                         className='input-box'
                        type='text'
                        placeholder='Enter a discripton'
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)  
                        }}
                        />
                        <br/>
                        <input
                         className='input-box'
                        type='text'
                        placeholder='Enter a priority'
                        value={priority}
                        onChange={(e) => {
                            setPriority(e.target.value)  
                        }}
                        />
                     


                        
                    </form>
                    <button type='button' className='Add-btn' onClick={ addNotes}>Add Notes</button>
                </div>

            </div>
                    </div>

        </>
    )
}
export default Home;
