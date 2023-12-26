import { Schema , model } from "mongoose";

const noteSchema = new Schema ({
    title:{
        type:String,
        required: true
        },
         description:{
            type:String,
        required: true
         },

    priority:{
        type:String,
        enum:['heigh','medium','low'],
        required: true
    }

}
,{
    timestamps: true 
 })

 const Note = model('Note',noteSchema);

 export default Note