 const UserModel = require('../Models/UserModel');

// @desc Login user
// @route POST /api/v1/auth/login
// @access Public
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Email and password are required'
            });
        }
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            });
        }
        // const isMatch = await user.comparePassword(password);
        // if (!isMatch) {
        //     return res.status(400).json({
        //         success: false,
        //         message: 'Incorrect password'
        //     });
        // }
        // const token = user.generateAuthToken();
        return res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            // token
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
}


// @desc Register user
// @route POST /api/v1/auth/register
// @access Public
exports.register = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phone, password, state, district, address, pinCode } = req.body;
        if (!firstName || !lastName || !email || !phone || !password || !state || !district || !address || !pinCode) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }
        // if we store directly 
        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            phone,
            password,
            state,
            district,
            address,
            pinCode
        });
        const savedUser = await newUser.save();
        return res.status(200).json({
            success: true,
            message: 'User registered successfully',
            data: savedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message:  error
        });
    }
}