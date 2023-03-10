import mongoose from 'mongoose';

const articlesSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
});

const Articles = mongoose.models.articles || mongoose.model('articles', articlesSchema);

export default Articles;