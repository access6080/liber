import express from 'express';
import mongoose from 'mongoose';
import  cors from 'cors';
import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
dotenv.config(); //Initialize enviroment variables

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Route Imports
import apiRoute from './routes/api.js';
import bookRoutes from './routes/books.js'

// Initialize Server
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(join(__dirname, 'build')));

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
app.use(cors({
    origin: `http://localhost:3000`
}));

//Linking Custom Routes
app.use('/api', apiRoute);
app.use('/book', bookRoutes);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => {
    console.log('Server Up and Running');
} );