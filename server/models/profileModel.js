const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  nativeLanguage: {
    type: String,
  },
  targetLanguages: {
    type: [String],
  },
  favTopics: {
    type: [String],
  },
  bio: {
    type: String,
  },
  joined: {
    type: Date,
  },
  lastActive: {
    type: Date,
  },
  vocab: [
    {
      count: {
        type: Number,
      },
      created: {
        type: Number,
      },
      updated: {
        type: Number,
      },
      cards: {
        type: [String],
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;