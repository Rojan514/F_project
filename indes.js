const bodyParser = require('body-parser');
const express = require('express')
const port = 3000;

const app = express();

//impoting the file
const calculationHelper = require("./calculationHelper");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/get-sum', (req, res) => {
    console.log(req.query);
    let a = req.query.a;
    let b = req.query.b;
    
    res.status(201).send(`sum = ${calculationHelper.sum(2,3)}`);
    res.send("Hello World he");
    // console.log(sum);
})

app.post('/get-detail', (req, res) => {

    console.log(req.body);
    res.status(201).send(req.body);
    // res.send("Hello World he");
})

app.post('/login', async (req, res) => {
    const response =await calculationHelper.login(req.body);
    console.log(req.body);
    res.status(201).send(response);
    // res.send("Hello World he");
})



app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})