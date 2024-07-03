const express = require('express');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Generate Confirmation Code
const generateConfirmationCode = () => {
    return crypto.randomBytes(20).toString('hex');
};

// Signup Route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        const confirmationCode = generateConfirmationCode();
        const newUser = new User({
            name,
            email,
            password,
            confirmationCode
        });
        
        await newUser.save();

        // Send Confirmation Email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Please confirm your Email account',
            html: `<h1>Email Confirmation</h1>
                   <h2>Hello ${name}</h2>
                   <p>Thank you for registering. Please confirm your email by clicking on the following link</p>
                   <a href="http://localhost:${process.env.PORT}/api/confirm/${confirmationCode}"> Click here</a>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send({ message: error.message });
            }
            res.status(200).send({ message: 'Registration successful! Please check your email for the confirmation link.' });
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Confirmation Route
router.get('/confirm/:confirmationCode', async (req, res) => {
    const { confirmationCode } = req.params;

    try {
        const user = await User.findOne({ confirmationCode });

        if (!user) {
            return res.status(400).send({ message: 'Invalid confirmation code' });
        }

        user.isConfirmed = true;
        user.confirmationCode = null;
        await user.save();

        res.status(200).send({ message: 'Email confirmed successfully' });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;
