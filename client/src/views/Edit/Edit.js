import React ,{useState,useEffect} from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Edit.css";

function Edit(){

    const [title,setTitle] = useState();
    const[description ,setDescription] = useState();
    const [priority , setPriority] = useState();



  
    
    return(
        <>
         <h1 className="text-center">Edit Note Here</h1>
     <div className='add-notes-form'>
       
                    <div>
                    <h1 className='text-center'> Edit Note</h1>
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
                    <button type='button' className='Add-btn' >Edit Notes</button>
                </div>

            </div>
        
        </>
    )
}
export default Edit