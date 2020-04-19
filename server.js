const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());

//Connect MongoDB usind local variable DB_URI
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

//Set static folder
if ( process.env.NODE_ENV === 'production') {
    console.log("Using static folder")
    app.use(express.static('client/build'));
}


// ROUTES 
const userRouter = require('./routes/users');
const serviceRouter = require('./routes/service');
const faqRouter = require('./routes/faq');
const favRouter = require('./routes/favorites');

app.use('/', userRouter);
app.use('/JKL-Guide/', serviceRouter);
app.use('/JKL-Guide/Faq', faqRouter);
app.use('/JKL-Guide/Favorites', favRouter);

app.listen(port, (err) => {
    if(err) console.log(err)
    else console.log(`server is running on port ${port}`);
});