const router = require('express').Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/profileModel');
const User = require('../../models/userModel');
const Vocab = require('../../models/vocabModel');

// Get all profiles
router.get('/user/all', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', [
      'username', 'createdOn']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get particular user's profile by id
router.get('/user/:id', async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.id }).populate(
      'user',
      ['username', 'createdOn']
    );

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    // if incorrect object
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// get my profile
router.get('/', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['username', 'createdOn']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete profile and user
router.delete('/', auth, async (req, res) => {
  try {
    //  TODO: remove users posts
    // remove profile
      await Profile.findOneAndRemove({user: req.user.id});
      // remove user
      await User.findOneAndRemove({_id: req.user.id});

    res.json({msg: 'User deleted'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Create Profile
router.post('/', auth, async (req, res) => {
  const { nativeLanguage, targetLanguage, bio, vocab } =
    req.body;

  const profileFields = {};

  profileFields.user = req.user.id;

  if (nativeLanguage) profileFields.nativeLanguage = nativeLanguage;
  if (targetLanguage) profileFields.targetLanguage = targetLanguage;
  if (bio) profileFields.bio = bio;
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
});

module.exports = router;
