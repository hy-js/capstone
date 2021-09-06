const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  nativeLanguage: {
    type: String,
  },
  targetLanguage: {
    type: String,
  },
  bio: {
    type: String,
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
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;