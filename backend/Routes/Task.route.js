const express = require('express');
const router = express.Router();
const Task = require("../Models/Task.model");

//Create todo
router.post("/",(req,res,next)=>{
    const task = new Task({
        description:req.body.description
    })
    task.save()
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })

});
    //fetch all todos
    router.get("/",(req,res,next)=>{
        Task.find()
        .then(result=>{
            res.send(result)
        })
        .catch(err=>{
            res.send(err.message)
        });
    
    })
module.exports = router;