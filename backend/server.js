const express = require('express');
const chats = require('./data/data');
const dotenv = require('dotenv')

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("Hey we on 5000 PORT");

    // res.send(data);
})

app.get('/api/chat', (req, res) => {
    res.send(chats);
})

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find((e) => e._id === req.params.id)
    if (singleChat) {
        res.send(singleChat);
    } else {
        res.send("No Matches Found");
    }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server started on ${PORT}`));
