import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String }, 
  tags: [{ type: String }], 
  thumbnailImage: { type: String }, 
  video: { type: String },
  url: { type: String }, 
  uploadDate: { type: Date, default: Date.now }, 
  allowComments: { type: Boolean, default: true }, 
  status: { type: String, default: "pending" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } 
});

const ArticleModel = mongoose.models.articles || mongoose.model("articles", articleSchema);

export default ArticleModel;