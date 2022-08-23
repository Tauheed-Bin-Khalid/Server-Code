const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        
    },
    taskDone:{
        type:Boolean,
        default:false
    },
    editCheck:{
        type:Boolean,
        default:false
    }
})


// create a new collection usig model

const List = new mongoose.model("List",listSchema)

module.exports = List