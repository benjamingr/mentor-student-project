const express = require("express");
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { check, validationResult } = require('express-validator');

const Student = require('../../models/Student');

const validationChecks = [
  check("fullName", "Full Name is required").not().isEmpty(),
  check("email", "Please Include A valid Email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
];

const studentRegistration = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullName, email, password } = req.body;
  try {
    let student = await Student.findOne({ email });
    if (student) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Student already exists" }] });
    }
    const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });
    student = new Student({
      fullName,
      email,
      avatar,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    student.password = await bcrypt.hash(password, salt);

    await student.save();
    const payload = {
      student: { id: student.id },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000000000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route    POST api/users
// @desc     Register Student
// @access   Public
router.post('/', validationChecks, studentRegistration);

module.exports = router;
