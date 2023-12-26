import Note  from "../models/Note.js";


const postApiNote = async (req, res) => {
    const {title, description ,priority} = req.body;

    const note = new Note({
        title,
         description,
         priority
    })
    try{
        const svaeNote = await note.save();
             res.json({
            succsess:true,
            data:svaeNote,
            message:"Create note successfully"
    
        })
    }
    catch(err){
        res.json({
            succsess:false,
            message:err.message
        })
    }
    
};

const getApiNote = async (req,res) => {
    const allnotes = await Note.find();
 try{
    res.json({
        succsess:true,
        data:allnotes,
        message:"show all notes successfully !"
    })
 }
 catch(err) {
    res.json({
    succsess:false,
    message:err.message
    })
 } 
}

    


export{postApiNote,getApiNote};