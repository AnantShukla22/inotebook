const mongoose=require("mongoose")
const {Schema}=mongoose;


const noteSchema = new mongoose.Schema({
    // to know whose notes it is
    user : {
        type: mongoose.Schema.Types.ObjectId,
        // ref of model
        ref:'user'

    },
    title:{
        type: String,
        required: true
    } ,
    tag: {
        type: String,
        default: "general"
    } ,
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model('notes',noteSchema)