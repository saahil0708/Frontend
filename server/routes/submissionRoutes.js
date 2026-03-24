import express from 'express';
import multer from 'multer';
import { submitAbstract } from '../controllers/submissionController.js';

const router = express.Router();

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/submit', upload.single('pdf'), submitAbstract);

export default router;
