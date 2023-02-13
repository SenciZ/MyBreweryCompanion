const User = require('../models/user');

export const userRegister = (req, res) => {
    console.log('Hey from user Controller');
}

export const userSave = async (req, res) => {
    const { username } = req.body;
    const userExists = await User.findOne({ username: username });

    if (userExists) return res.status(404).json( {message: 'Username is taken'});

    const newUser = await new User({username: username}).save()
}