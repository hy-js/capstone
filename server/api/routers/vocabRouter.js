const router = require('express').Router();
const Vocab = require('../../models/vocabModel');
const auth = require('../../middleware/auth');

router.post('/', auth, async (req, res) => {
  try {
    const { word, language, translation, context } = req.body;

    const newVocab = new Vocab({
      word,
      language,
      translation,
      context
    });

    const savedVocab = await newVocab.save();
    res.json(savedVocab);

  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
