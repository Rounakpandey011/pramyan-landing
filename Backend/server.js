import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'; 
import leadRoutes from './routes/leadRoutes.js';

dotenv.config();

// 2. Connect to MongoDB
connectDB();

// 3. Initialize the Express app
const app = express();

// 4. Middleware to parse JSON bodies and enable CORS
app.use(cors());
app.use(express.json());

// 5. Basic Test Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Use lead routes
app.use('/api/leads', leadRoutes);

// 6. Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});