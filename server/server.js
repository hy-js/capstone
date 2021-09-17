const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

// set up server
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json({ extended: false }));;
// Reads as req.cookies
app.use(cookieParser());
// allow certain domain names to make requests
app.use(
  cors({
    origin: [
      "http://localhost:3000"
      // TODO: Add heroku
    ],
    // allow cookies
    credentials: true,
  })
);

// connect to mongoDB

mongoose.connect(
  process.env.MDB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);

// set up routes
app.use("/auth", require("./api/routers/userRouter"));
app.use("/vocab", require("./api/routers/vocabRouter"));
app.use("/profile", require("./api/routers/profileRouter"));
app.use("/article", require("./api/routers/articleRouter"));
