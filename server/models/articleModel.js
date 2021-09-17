const mongoose = require("mongoose")

const articleSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    name: { type: String, required: true },
    language: { type: String, required: true },
    source: { type: String, required: true},
    paragraphs: [
      {
        text: {
          type: String,
          required: true
        }
      }
    ],
  },
  { timestamps: true }
)

const Article = mongoose.model("article", articleSchema)


module.exports = Article;