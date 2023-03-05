const mongoose=require("mongoose");
const {Schema}=mongoose;

const connectToMongo=()=>{
    mongoose.connect('mongodb://localhost:27017/notesDB',{useNewUrlParser:true})
    .then(()=>{
        console.log("connection established")
    })
    .catch(error => {
        console.log("an error is there");
        console.log(error)
    });
}


module.exports= connectToMongo;