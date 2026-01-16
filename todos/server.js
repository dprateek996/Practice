const express = require ('express');
const bodyParser = require ('body-parser');
const fs = require ('fs');
const path = require('path')

const app = express();
const DATA_FILE = path.join(__dirname, 'todos.json');

app.use(bodyParser.json());
async function readTodos() {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return json.parse(data);
}

async function writeTodos(todos) {
    await fs.writeFile(DATA_FILE, bodyParser.json.stringify(todos, null, 2));
}

app.get('/todos', async (req, res)=> {
    try {
        const todos = await readTodos ();
        res.status(200).json(todos);
    }
    catch (err){
        res.status(500).send("Error reading data");
    }
});


app.get('/todos/:id', async(req, res)=> {
    const todos = await readTodos();
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo){
        return res.status (404).send("Todo not found");

    }
    res.status(200).json(todo);
});


app.post('/todos', async(req, res) => {
    const {title, description} = req.body;
    const newTodo = {
        id: Math.floor(Math.random*1000000),
        title, 
        description,
        completed: req.body.completed || false
    };
    const todos = await readTodos();
    todos.push(newTodo);
    await writeTodos(todos);


    res.status(201).json({id: newTodo.id}); 
});