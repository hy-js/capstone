const router = require('express').Router();
const auth = require('../../middleware/auth');

const User = require('../../models/userModel');
const Vocab = require('../../models/vocabModel');

// get all vocabs
router.get('/all', async (req, res) => {
  try {
    const vocab = await Vocab.find().populate('user', [
      'username']
    );
    res.json(vocab);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// get my vocab
router.get('/', auth, async (req, res) => {
  try {
    const vocab= await Vocab.find({
      user: req.user.id
    }).populate('user', ['username']);

    if (!vocab) {
      return res.status(400).json({ msg: `You don't have a vocab list yet!` });
    }
    res.json(vocab);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// get user's vocab
router.get('/user/:id', async (req, res) => {
  try {
    const vocab = await Vocab.find({ user: req.params.id }).populate('user', [
      'username']
    );
    if (!vocab) return res.status(400).json({ msg: 'No saved vocab list' });
    res.json(vocab);
  } catch (err) {
    console.error(err.message);
    // if incorrect object
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'No saved vocab list' });
    }
    res.status(500).send('Server Error');
  }
});

router.post('/', auth, async (req, res) => {
  const { word, language, translation, context } = req.body;

  const vocabFields = {};
  vocabFields.user = req.user.id;
  if (word) vocabFields.word = word;
  if (language) vocabFields.language = language;
  if (translation) vocabFields.translation = translation;
  if (context) vocabFields.context = context;

  try {
    let vocab= await Vocab.findOne({ word: word });
    if(vocab){
      return res.status(400).json({ msg: 'Vocab already Exists' })
    }
    // if (vocab) {
    //   vocab = await Vocab.findOneAndUpdate(
    //     { user: req.user.id },
    //     { $set: vocabFields },
    //     { new: true }
    //   );
    //   return res.json(vocab);
    // }

    vocab = new Vocab(vocabFields);


    await vocab.save();
    res.json(vocab);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
