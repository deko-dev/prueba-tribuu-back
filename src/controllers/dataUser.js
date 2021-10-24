const { ObjectId } = require("mongodb");
const dataUserModel = require('../models/dataUser');

// Create constant for export the callbacks
const usersControllers = {};


// Create the callback for register the user
usersControllers.registerUser = async (req, res) => {
    // Create a new user
    const newUser = await new dataUserModel(req.body);
    // Save the new user
    await newUser.save();
    // Send the response
    res.status(200).json({
        'status': 'User created',
        'user': newUser,
    });
}

// Create the callback for get all users
usersControllers.getAllUsers = async (req, res) => {
    // Get all users
    const users = await dataUserModel.find();
    // Send the response
    res.json(users);
}

// Create the callback for the get user data
usersControllers.getDataUser = async (req, res) => {
    // Get data of the user
    const dataUser = await dataUserModel.findOne({ '_id': ObjectId(req.params.id) });
    // Send the response
    res.json(dataUser);
}

// Create the callback for the update user data
usersControllers.updateDataUser = async (req, res) => {
    // Update the user data
    await dataUserModel.updateOne({ '_id': ObjectId(req.params.id) }, { $set: req.body });
    // Send the response
    res.status(200).json({
        'status': 'User updated',
    });
}

module.exports = usersControllers;