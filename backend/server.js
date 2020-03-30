const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());

const uri = process.env.DB_URI;
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false
    }
);

const connection = mongoose.connection;
connection.once('open', (err) => {
    if(err) console.log(err)
    else console.log("MongoDB database connection established successfully");
});

const userRouter = require('./routes/users');
const serviceRouter = require('./routes/service');

app.use('/', userRouter);

app.use('/JKL-Guide', serviceRouter);

app.listen(port, (err) => {
    if(err) console.log(err)
    else console.log(`server is running on port ${port}`);
});