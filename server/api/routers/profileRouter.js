const router = require('express').Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/profileModel');
const User = require('../../models/userModel');
const Vocab = require('../../models/vocabModel');

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', [
      'username',
      'avatar'
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['username', 'createdAt']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'avatar']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);

    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }

    res.status(500).send('Server Error');
  }
});

router.post('/', auth, async (req, res) => {
    const {
      nativeLanguage,
      targetLanguages,
      favTopics,
      bio,
      lastActive,
      vocab,
    } = req.body;

    const profileFields = {};

    profileFields.user = req.user.id;

    if (nativeLanguage) profileFields.nativeLanguage = nativeLanguage;
    if (targetLanguages) {
      profileFields.targetLanguages = targetLanguages.split(',').map((targetLanguage) => targetLanguage.trim());
    }
    if (favTopics) {
      profileFields.favTopics = favTopics.split(',').map((favTopic) => favTopic.trim());
    }
    if (bio) profileFields.bio = bio;
    if (lastActive) profileFields.lastActive = lastActive;
    if (vocab) profileFields.vocab = vocab;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
