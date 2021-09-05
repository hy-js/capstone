const router = require('express').Router();
const mongoose = require('mongoose')
const User = require('../../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

// TODO: change to api toutes
// @route   Get auth
// @desc  Test route
// @acess   private
// Check if logged in
router.get('/', auth, async (req, res) => {
  try {
    console.log(req.user.id)
    const user = await User.findById(req.user.id).select('-passwordHash');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

// REGISTRATION: Sign Up
router.post('/', async (req, res) => {
  try {
    const { username, password, passwordConfirm,  avatar } = req.body;

    // validation
    if (!username || !password || !passwordConfirm )
      return res
        .status(400)
        .json({ errorMessage: 'Please enter all required fields.' });

    if (password.length < 6)
      return res.status(400).json({
        errorMessage: 'Please enter a password of at least 6 characters.'
      });

    if (password !== passwordConfirm)
      return res.status(400).json({
        errorMessage: 'Please enter the same password twice.'
      });

    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({
        errorMessage: 'An account with this username already exists.'
      });

    // Add new user to db
    const cleanedUsername = username.toLowerCase().trim();
    const salt = bcrypt.genSaltSync(10);
    //  Salt is random string placed before cookie before hashing
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username: cleanedUsername,
      passwordHash: hash,
      createdAt: new Date().toISOString()
    });
    const savedUser = await newUser.save();

    const payload = {
      user: {
        id: savedUser._id,
      },
    };

    //  Confirm Token
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
    );
    console.log(token)
    // HTTP-only cookie (in header) to avoid XXS local storage hack
    res
      .cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
    // Catch errors
  } catch (err) {
    console.log(err);
    res.status(500).send;
  }
});

// SIGN IN: Join
router.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body;
    // validate
    if (!username || !password)
      return res
        .status(400)
        .json({ errorMessage: 'Please enter all required fields.' });

    const existingUser = await User.findOne({ username });
    if (!existingUser)
      return res.status(401).json({ errorMessage: 'Incorrect credentials.' });

    //Verify password
    const passwordVerified = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );

    if (!passwordVerified)
      //  Unauthorized correct
      return res.status(401).json({ errorMessage: 'Incorrect credentials.' });

      const payload = {
        user: {
          id: existingUser._id,
        },
      };

      //  Confirm Token
      const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
      );
    // send the token in a HTTP-only cookie
    console.log(token)
    res
      .cookie('token', token, {
        httpOnly: true,
        // secure: true,
        sameSite: 'none'
      })
      .send();

  } catch (err) {
    console.log(err);
    res.status(500).send;
  }
});

// SIGNOUT : clearcookie / set to empty to invaldiate
router.get("/signout", (req, res) => {
   res
     .cookie("token", "", {
       httpOnly: true,
       expires: new Date(0),
      //  secure: true,
       sameSite: "none",
     })
     .send();
 });

// SIGNEDIN: check if logged in
router.get("/signedin", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
  .then(result => res.json(result))
  .catch(err => {
    console.log(err)
    res.status(400).json({
      "message": "Error getting user from the database",
      err
    })
  })
})

module.exports = router;
