const router = require('express').Router();
const auth = require('../../middleware/auth');

const User = require('../../models/userModel');
const Vocab = require('../../models/vocabModel');

// search
router.get('/search' , async (req, res) => {
  try {
  // you can access the query from req.query
  const search = await Vocab.find(req.query);
  res.json(search);
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server Error');
}
});

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
// get vocab by language
router.get('/lang/:id', async (req, res) => {
  Vocab.find({ language: req.params.id }).exec()
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: 'Error getting user from the database',
        err
      });
    });
});

// get this vocab's card
router.get('/word/:id', auth, (req, res) => {
  Vocab.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: 'Error getting user from the database',
        err
      });
    });
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
    vocab = new Vocab(vocabFields);

    await vocab.save();
    res.json(vocab);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});
router.post('/:id', auth, async (req, res) => {
  const { word, language, translation, context } = req.body;
  const vocabFields = {};
  vocabFields.user = req.user.id;
  if (translation) vocabFields.translation = translation;
  if (context) vocabFields.context = context;

  try {
    let vocab= await Vocab.findOneAndUpdate({_id: req.params.id}, vocabFields, {upsert: true});
    res.json(vocab);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
