const express = require('express');
const router = express.Router();
const Project = require("../Models/Project.model");

//Create todo
router.post("/",(req,res,next)=>{
    const project = new Project({
        description:req.body.description,
        created: new Date(),
    })
    project.save()
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })

});
    //fetch all todos
    router.get("/",(req,res,next)=>{
        Project.find()
        .then(result=>{
            res.send(result)
        })
        .catch(err=>{
            res.send(err.message)
        });
    
    })

    router.delete("/:id",(req,res,next)=>{
        const id = req.params.id
        Project.findByIdAndDelete(id)
        .then(result=>{
            res.send(result)
        })
        .catch(err=>{
            res.send(err.message)
        })
    })
module.exports = router;