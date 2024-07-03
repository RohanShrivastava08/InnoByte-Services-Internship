# InnoByte-Services-Internship :
## Task 1 - Node.js Authentication API & Task 2 - Email Confirmation

- Welcome to the Node.js Authentication API and Email Confirmation project!
- This repository contains two distinct yet related tasks:
- a Node.js API for user authentication and a project demonstrating email confirmation with NodeMailer.
- Below, you'll find comprehensive documentation covering both tasks, including setup instructions, features, technologies used, and more.

![User Page](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/6aa96b8b-5c63-4c2f-974f-57c75d88b73c)

![Style css](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/edd1a161-ca82-4a61-b7e5-befbd181cdb0)

![Login Page](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/9a50c88a-dbbd-4d4a-954f-2ecb4013abfa)

![Email Confirmation](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/12f0a9ae-2ac4-4bfc-8265-da73aaee0c88)

![Email Success](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/25b15dfb-7b00-48b6-ba7e-184ddbcd4a5e)

![MongoDB Database](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/6858b45b-125a-434e-a9db-216b69fc4925)

![Postman Testing](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/5a65fa54-143b-41d6-9c1d-31c93f49c550)

## Table of Contents
- Project Overview
- Features
- Technologies Used
- Installation
- Running the Project
- Connecting to MongoDB
- Using NodeMailer
- API Endpoints
- Project Structure
- Screenshots
- License

## Project Overview
This repository includes two main tasks:

### Task 1 - Node.js Authentication API
- A Node.js API built with Express.js for user authentication, including signup, login, and profile management.
- It utilizes MongoDB for data storage and JWT for secure authentication.

### Task 2 - Node.js Project with MongoDB and NodeMailer
- An extension of Task 1 that includes email confirmation functionality using NodeMailer.
- This task demonstrates how to send confirmation emails upon user signup, providing a complete user authentication and verification workflow.

## Features

### Task 1:
- User signup with username, email, and password
- Password hashing for enhanced security
- User login with JWT token generation
- Protected user profile endpoint
- Input validation

### Task 2:
- User authentication (signup, login, profile)
- Sending confirmation emails upon signup
- JWT token generation and validation
- Input validation and password hashing

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- NodeMailer
- JSON Web Tokens (JWT)
- bcrypt

## Installation
To set up the project on your local machine, follow these steps:

- Clone the Repository:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

- Install Dependencies:

```bash
npm install
```

### Running the Project
- Set Up Environment Variables:

Create a .env file in the root directory and add the following variables:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
NODEMAILER_USER=your-email@example.com
NODEMAILER_PASS=your-email-password
```

- Start the Server:

```bash
npm start
```

The server will run on http://localhost:4500 by default.

## Connecting to MongoDB
- Ensure you have a MongoDB URI set in your .env file.
- This URI should point to your MongoDB instance.
- If you don't have a MongoDB cluster, you can create one at MongoDB Atlas.

### Using NodeMailer
NodeMailer is used to send emails from your Node.js application.

Follow these steps to configure it:

- Install NodeMailer:

```bash
npm install nodemailer
```

- Configure NodeMailer:

```js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

const mailOptions = {
  from: process.env.NODEMAILER_USER,
  to: 'user-email@example.com',
  subject: 'Confirmation Email',
  text: 'Your confirmation code is XYZ123',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
```

- Trigger Email on Signup:

Extend the /api/signup endpoint in Task 1 to send a confirmation email upon successful registration.

## API Endpoints
### Task 1 - Authentication API
 User Signup: /api/signup

Method: POST
Body: { "username": "your_username", "email": "your_email", "password": "your_password" }

User Login: /api/login

Method: POST
Body: { "email": "your_email", "password": "your_password" }

User Profile: /api/profile

Method: GET
Headers: { "Authorization": "Bearer <your_jwt_token>" }

### Task 2 - Email Confirmation

Extend the Task 1 API with email confirmation functionality.

## Project Structure

```arduino
your-repo-name/
├── Task 1/
│   ├── Project 1 SS/
│   ├── public/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── views/
│   ├── .env
│   ├── app.js
│   └── package.json
└── Task 2/
    ├── models/
    │   └── User.js
    ├── routes/
    │   └── auth.js
    ├── views/
    │   └── home.ejs
    ├── .env
    ├── app.js
    ├── package.json
    └── README.md
```

## Screenshots
### Task 1 - Authentication API

![Login ejs](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/7280f321-dfe3-4e20-aff8-ed03ec14408a)

![MongoDB Database](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/e797b7b4-b4b7-4ef0-a5fa-a4ac29997fa0)

![Profile ejs](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/e27c24d7-1f71-4237-9ea5-55ebd69cdbde)

![Signup Success](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/1c83d46e-01f1-4f29-8374-4e1e9154feb7)

![Style css](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/edd1a161-ca82-4a61-b7e5-befbd181cdb0)

![User Page](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/6aa96b8b-5c63-4c2f-974f-57c75d88b73c)

![Index js](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/702850e2-06ff-4161-81d2-7756bf78c947)

![Login Page](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/9a50c88a-dbbd-4d4a-954f-2ecb4013abfa)

### Task 2 - Email Confirmation

![MongoDB Database](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/6858b45b-125a-434e-a9db-216b69fc4925)

![Postman Testing](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/5a65fa54-143b-41d6-9c1d-31c93f49c550)

![Server js](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/108cc113-317a-43df-a1b1-d0260ba08fc3)

![Email Confirmation](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/12f0a9ae-2ac4-4bfc-8265-da73aaee0c88)

![Email Success](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/25b15dfb-7b00-48b6-ba7e-184ddbcd4a5e)

![Auth js](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/b75a10e5-0c31-4339-8a2a-4c2c0a6bae5f)




## License

This project is licensed under the MIT License. See the LICENSE file for details.
