import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); //Initialize enviroment variables

//Route Imports
import apiRoute from './routes/api.js';

// Initialize Server
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Database
mongoose.connect(process.env.CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log('Database initialized!')
});
const db = mongoose.connection;
db.on('error', (e) => console.log(e.message));

//Express Middleware
app.use(express.json());

//Linking Custom Routes
app.use('/api', apiRoute);


app.listen(PORT, () => {
    console.log('Server Up and Running');
} );