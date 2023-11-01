const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json("Wrong credentials!");
    }

    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);
    const password = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (password !== req.body.password) {
      return res.status(401).json("Wrong credentials");
    }

    const isAdmin = false; // Assuming the user is not an administrator

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: isAdmin, // Set to false if the user is not an administrator
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    res.status(200).json({ user, accessToken });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
