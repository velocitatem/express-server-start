import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'
const data = {
    "Daniel": {
        "age": "15",
        "interests": ["cs", "web dev"]
    },
}
const app = express();

app.use(express.static(path.join(__dirname, '/build'))) //to host a build website
app.use(bodyParser.json()) // to process params

//apis and their paths and resposes
app.get('/api/:name', (req, res) => {
    res.send(data[req.params.name])
});
app.get('/api/get/:item/:name', (req, res) => {    
    res.send(data[req.params.name][req.params.item])
})
app.get("/stat", (req, res) => {
    res.status(200).send(`server is running`)
})

// /build hosting
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})


//server log
app.listen(8000, () => console.log("server is listening on port 8000, happy coding"))