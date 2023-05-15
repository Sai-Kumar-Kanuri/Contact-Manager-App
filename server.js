const express = require('express');
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
connectDb();



const app = express();
app.use(express.json())
app.use('/api/contacts', require('./routes/contactRoute'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler);


// app.get('/users/:userId/books/:bookId', (req, res) => {
//     res.send(req.params)
// })

const port = process.env.PORT
app.listen({ port }, () => {
    console.log(`Server is running at port ${port}`);
})