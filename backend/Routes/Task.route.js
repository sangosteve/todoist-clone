const express = require('express');
const router = express.Router();
const Task = require("../Models/Task.model");

//Create todo
router.post("/",(req,res,next)=>{
    const task = new Task({
        description:req.body.description,
        created: new Date(),
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

    router.delete("/:id",(req,res,next)=>{
        const id = req.params.id
        Task.findByIdAndDelete(id)
        .then(result=>{
            res.send(result)
        })
        .catch(err=>{
            res.send(err.message)
        })
    })
module.exports = router;