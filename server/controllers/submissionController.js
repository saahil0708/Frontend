import Submission from '../models/Submission.js';
import ImageKit from 'imagekit';
import dotenv from 'dotenv';
import { sendConfirmationEmail } from '../utils/emailService.js';

dotenv.config();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export const submitAbstract = async (req, res) => {
  try {
    const { name, designation, affiliation, title, email } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: 'Abstract file is required.' });
    }

    // Upload to ImageKit
    const uploadResult = await imagekit.upload({
      file: file.buffer,
      fileName: `abstract-${Date.now()}-${file.originalname}`,
      folder: 'Pharma_AI',
    });

    // Save to MongoDB
    const newSubmission = new Submission({
      name,
      designation,
      affiliation,
      title,
      email,
      pdfUrl: uploadResult.url,
    });

    await newSubmission.save();

    // Trigger non-blocking email
    sendConfirmationEmail(email, name, title).catch(err => {
      console.error('Email sending failed:', err);
    });

    res.status(200).json({
      message: 'Submission successful! A confirmation email has been sent to your inbox.',
      data: newSubmission,
    });
  } catch (error) {
    console.error('Error handling submission:', error);
    res.status(500).json({ message: 'Internal server error. Please try again later.' });
  }
};

