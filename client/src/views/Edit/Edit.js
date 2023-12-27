import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Edit.css";

function Edit() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");

    const { _id } = useParams();

    const fetchNote = async () => {
        try 
        {
            const response = await axios.get(`/api/v1/notes/${_id}`);
            const { title, description, priority } = response?.data?.data;
            console.log(response)
            setTitle(title);
            setDescription(description);
            setPriority(priority);
        } catch (error) {
            console.error("Error fetching note:", error);
        }
    }

    useEffect(() => {
        fetchNote();
    
    },[]);

    const updateNote = async (_id) => {
       
        const response = await axios.put(`/api/v1/notes/${_id}`,{
            title,
            description,
            priority
        } )

        if (response?.data?.data) {
            alert("Note Update successfully");
            window.location.href = '/';
        }

        setTitle('');
        setDescription('');
        setPriority('');
    }

    return (
        <>
            <h1 className="text-center">Edit Note Here</h1>
            <div className='add-notes-form'>
                <div>
                    <h1 className='text-center'> Edit Note</h1>
                    <form>
                        <input
                            className='input-box'
                            type='text'
                            placeholder='Enter Title'
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                        />
                        <br />
                        <input
                            className='input-box'
                            type='text'
                            placeholder='Enter a description'
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                        />
                        <br />
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
                    <button type='button' className='Add-btn' onClick={() => {updateNote(_id)}}>Edit Notes</button>
                </div>
            </div>
        </>
    )
}

export default Edit
