const router = require('express').Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/profileModel');
const User = require('../../models/userModel');
const Vocab = require('../../models/vocabModel');
const Article = require('../../models/articleModel');

// Create Article
router.post('/create', auth, async (req, res) => {
  const { name, language, source, paragraphs } = req.body;

  const articleFields = {};
  articleFields.user = req.user.id;

  if (name) articleFields.name = name
  if (language) articleFields.language = language;
  if (source) articleFields.source = source;
  if (paragraphs) articleFields.paragraphs = paragraphs;

  try {
    let article = await Article.findOne({ name: name });
    if (article) {
      return res.json({ msg: 'Article with this name already exists' });
    }

    article = new Article(articleFields);

    await article.save();
    res.json(article);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// Get all profiles
router.get('/all', async (req, res) => {
  try {
    const articles = await Article.find().populate('user', [
      'username',
      'createdOn'
    ]);
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/:id', auth, (req, res) => {
  Article.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: 'Error getting user from the database',
        err
      });
    });
});

module.exports = router;
