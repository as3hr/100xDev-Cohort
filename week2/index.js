const express = require('express');
const bodyParser=require('body-parser');
const app=express();


app.use(express.json());
app.use(bodyParser.json());

const todo=[
    {
        'id':1,
        'name':'todo1',
    },
    {
        'id':2,
        'name':'todo2',
    },
    {
        'id':3,
        'name':'todo3',
    },
];


app.get('/',(req,res)=>{
   res.send(todo);
});

app.post('/add-todo',async (req,res)=>{
   let body= req.body;
   console.log(req.body);
   todo.push(body);
   res.send(todo);
});

app.delete('/delete',(req,res)=>{
    let id=req.query.id;
    todo.splice(id,1);
    res.send('deleted successfully');
})

app.listen(5000,()=>{
    console.log('Running on 5000');
});
