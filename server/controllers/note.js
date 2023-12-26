import Note from "../models/Note.js";


const postApiNote = async (req, res) => {
    const { title, description, priority } = req.body;

    const note = new Note({
        title,
        description,
        priority
    })
    try {
        const svaeNote = await note.save();
        res.json({
            succsess: true,
            data: svaeNote,
            message: "Create note successfully"

        })
    }
    catch (err) {
        res.json({
            succsess: false,
            message: err.message
        })
    }

};

const getApiNote = async (req, res) => {
    const allnotes = await Note.find();
    try {
        res.json({
            succsess: true,
            data: allnotes,
            message: "show all notes successfully !"
        })
    }
    catch (err) {
        res.json({
            succsess: false,
            message: err.message
        })
    }
}

// Update Note API
const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, description, priority } = req.body;


    await Note.updateOne({ _id: id }, {
        $set: {
            title: title,
            description: description,
            priority: priority
        }
    });
    try {
        const updateNote = await Note.findById(id);

        res.json({
            success: true,
            data: updateNote,
            message: "Note update successfully"
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }

}

//  delete Note Api

// const deleteNote = async (req, res) => {
//     const { id } = req.params;
//     await Note.deleteOne({ _id: id });
//     try {

//         res.json({
//             success: true,
//             message: 'Note delete Successfully'
//         })
//     }
//     catch (err) {
//         res.json({
//             success: false,
//             message: err.message
//         })
//     }
// }

const noteDelete = async (req, res) => {
    const {id} = req. params;
   const deletenote =  await Note.deleteOne({_id: id})

   try{
    res.json({
        success: true,
        data: deletenote,
        message: "delete notes successfully"
    })

   }catch(err){
    res.json({
        success: false,
        message: err.message
    })
   }
}



export { postApiNote, getApiNote, updateNote, noteDelete };