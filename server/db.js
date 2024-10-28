const mongoose = require("mongoose");

module.exports=() =>{
    try{
        mongoose.connect(process.env.DB);
        console.log("Connected to database succesfully")
    }catch(error){
        console.log(error);
        console.log("Couldn't connect to database!")
    }
}