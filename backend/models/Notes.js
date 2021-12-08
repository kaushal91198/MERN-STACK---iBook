const mongoose = require("mongoose");

// eslint-disable-next-line no-undef
const notesSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description:{ 
        type: String, 
        required: true,
        unique:true
    },
    tag:{ 
        type: String,
        default:"General"
    },
    date:{
        type:String,
        default:Date.now
    }
});

module.exports  = mongoose.model('notes',notesSchema)