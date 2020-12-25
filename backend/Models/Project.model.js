const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    created:{
        type:Date,
        required:false,
    },

    due:{
        type:Date,
        required:false,
    },

})

const Projectlist = mongoose.model('projects',ProjectSchema);
module.exports = Projectlist;