const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    created:{
        type:Date,
        required:true,
    },

    due:{
        type:Date,
        required:false,
    },

    project_id:{
        type:String,
        required:false
    }

})

const Tasklist = mongoose.model('tasks',TaskSchema);
module.exports = Tasklist;