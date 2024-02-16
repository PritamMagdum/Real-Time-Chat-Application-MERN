const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hey we on 5000 PORT");

    // res.send(data);
})


// app.get('/api/chat', (req, res) => {
//     res.send(chats);
// })

// app.get('/api/chat/:id', (req, res) => {
//     // console.log(req.params.id);
//     const singleChat = chats.find((e) => e._id === req.params.id)
//     if (singleChat) {
//         res.send(singleChat);
//     } else {
//         res.send("No Matches Found");
//     }
// })

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server started on ${PORT}`));
