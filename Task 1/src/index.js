const express = require("express");
const path = require("path");
const User = require("./config");
const bcrypt = require('bcrypt');

const app = express();
// convert data into json format
app.use(express.json());
// Static file
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
//use EJS as the view engine
app.set("view engine", "ejs");

app.get("/api/login", (req, res) => {
    res.render("login");
});

app.get("/api/signup", (req, res) => {
    res.render("signup");
});

// Register User
app.post("/api/signup", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.send('Email already exists. Please choose a different email.');
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();

        console.log("User registered successfully");
        res.send('User registered successfully');
    } catch (error) {
        console.error("Failed to register user:", error);
        res.status(500).send('Failed to register user');
    }
});

// Login user
app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.send("Email not found");
        }

        // Compare the hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.send("Wrong Password");
        }

        // Redirect to profile page after successful login
        res.redirect("/api/profile");
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send("Server error");
    }
});

// Endpoint for rendering user profile page
app.get("/api/profile", async (req, res) => {
    try {
        // Example: Fetch user data from database
        const user = await User.findOne({ /* Query to find specific user */ });

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.render("profile", { user }); // Pass user data to profile.ejs
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).send("Server error");
    }
});

// Define Port for Application
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
