const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    description:{
        type:String,
        required:true
    }
})

const Tasklist = mongoose.model('tasks',TaskSchema);
module.exports = Tasklist;