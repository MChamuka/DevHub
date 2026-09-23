// backend/server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware: Tells Express how to handle JSON data and security
app.use(cors());
app.use(express.json());

// A simple test route to ensure the server is running
app.get('/', (req, res) => {
    res.send("Welcome to the Project Management API!");
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});