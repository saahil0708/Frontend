import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  affiliation: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  pdfUrl: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Submission = mongoose.model('Submission', submissionSchema);

export default Submission;
