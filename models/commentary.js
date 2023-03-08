import mongoose from 'mongoose';

const commentarySchema = new mongoose.Schema({
  name: String,
  text: String,
});

const Commentary = mongoose.models.commentary || mongoose.model('commentary', commentarySchema);

export default Commentary;