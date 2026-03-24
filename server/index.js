import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import submissionRoutes from './routes/submissionRoutes.js';
import connectDB from './utils/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection (Triggered on Startup/First Request)
connectDB();

// Routes
app.use('/api', submissionRoutes);

app.get('/', (req, res) => {
  res.send('Pharma Conference Serverless Backend is running!');
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// Export for Vercel Serverless
export default app;


