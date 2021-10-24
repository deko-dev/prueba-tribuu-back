const express = require('express');
const router = express.Router();
const usersControllers = require("../controllers/dataUser");

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post("/users/register", usersControllers.registerUser);

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get("/users", usersControllers.getAllUsers);

// @route   GET api/dataUser
// @desc    Get dataUser
router.get('/users/:id', usersControllers.getDataUser);

// @route   PUT api/dataUser
// @desc    Update dataUser
router.put('/users/:id', usersControllers.updateDataUser);

// Exports the router
module.exports = router;
