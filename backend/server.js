const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const TaskRoute = require('./Routes/Task.route');
const ProjectRoute = require('./Routes/Project.route');

const app = express();

//mongoose connection instance
mongoose.connect("mongodb+srv://blackjack:B7NfqpuT6cpuhY8h@cluster0.aor3g.mongodb.net/todoist-clone?retryWrites=true&w=majority",
{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
.then(()=>{
    console.log('Connected to Mongo DB successfully...');
});

app.use(express.json());
app.use(cors());
app.use('/tasks',TaskRoute);
app.use('/projects',ProjectRoute);

app.listen(2020,()=>{console.log('server is listening on port 2020...')})