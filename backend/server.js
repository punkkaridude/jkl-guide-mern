const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false
}

);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const userRouter = require('./routes/users');
const addserviceRouter = require('./routes/addservice');
//VOISKO OLLA JOKU TÄMMÖNEN?
const loginRouter = require('./routes/login');

app.use('/Register', userRouter);

//VOISKO OLLA JOKU TÄMMÖNEN?
app.use('/', loginRouter);

app.use('/JKL-Guide/Add-service', addserviceRouter);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});