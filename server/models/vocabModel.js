const mongoose = require("mongoose")

const vocabSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    word: { type: String, required: true },
    language: { type: String, required: true },
    translation: { type: String},
    context: { type: String },
    // translation: { type: [{ notes: String, trans: String, user: String, language: String }]},
    // context: { type: [{ ngram: String, source: String }] },
  },
  { timestamps: true }
)

const Vocab = mongoose.model("vocab", vocabSchema)
module.exports = Vocab