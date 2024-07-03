# Task 1 -Node.js Authentication API

![Login Page](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/45fe2563-914c-485b-93e6-bd3d470cab41)

![MongoDB Database](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/ccf520ee-ba98-4a86-90c8-2cd4020bc34b)

![User Page](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/4010c245-11e5-4233-a6a7-2b3a2e87860b)

![Profile ejs](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/333ba24f-1399-4647-8a62-ed16fa012795)

![Style css](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/ff8f6e83-37f6-4988-824c-9b10ac4ea3ca)


## Table of Contents
- Project Overview
- Features
- Technologies Used
- Installation
- Running the Project
- Connecting to MongoDB
- API Endpoints
- Project Structure
- Screenshots
- License

### Project Overview
- This project is a Node.js API for user authentication, including signup, login, and profile management.

- It uses Express.js for the server, MongoDB for data storage, and JWT for secure authentication.

### Features
- User signup with username, email, and password
- Password hashing for security
- User login with JWT generation
- Protected user profile endpoint
- Input validation

### Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt

### Installation
- Clone the repository:

```bash
git clone https://github.com/RohanShrivastava08/InnoByte-Services-Internship.git
cd InnoByte-Services-Internship/Task 1
```
### Install dependencies:

```bash
npm install
```

### Running the Project
- Create a .env file in the root directory and add your MongoDB URI and a secret key:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### Start the server:

```bash
npm start
```
- The server will run on port 4500 by default.
- You can change this in the app.js file if needed.

### Connecting to MongoDB
- Set up a MongoDB database:

- If you don't have a MongoDB cluster, create one at MongoDB Atlas.
- Get your connection string (URI) from MongoDB Atlas.
- Add the MongoDB URI to your .env file:

```env
MONGODB_URI=your_mongodb_uri
```

- Ensure Mongoose is connected in your app.js file:

```javascript
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
```

### API Endpoints
#### User Signup: /api/signup

Method: POST
Body: { "username": "your_username", "email": "your_email", "password": "your_password" }

#### User Login: /api/login

Method: POST
Body: { "email": "your_email", "password": "your_password" }

#### User Profile: /api/profile

Method: GET
Headers: { "Authorization": "Bearer <your_jwt_token>" }

### Project Structure
```arduino
InnoByte-Services-Internship/
│
├── Task 1/
│   ├── Project 1 SS/
│   ├── public/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── views/
│   ├── Untitled Diagram.drawio
│   ├── package-lock.json
│   ├── package.json
│   └── .env
└── Task 2/
    ├── README.md
```
### Screenshots

![Login Page](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/45fe2563-914c-485b-93e6-bd3d470cab41)

![Login ejs](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/573d9414-f893-431b-bdf5-34a0f5b19e4b)

![MongoDB Database](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/ccf520ee-ba98-4a86-90c8-2cd4020bc34b)

![Profile css](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/f939d977-bb33-4d39-8e36-5c4563497efe)

![Profile ejs](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/333ba24f-1399-4647-8a62-ed16fa012795)

![Signup Page](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/9284c2f5-e5cf-4ada-bab8-d06f1bd9c8ba)

![Signup Success](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/186c9d3c-3a90-435d-a0b7-5ef6bb6d1744)

![Signup ejs](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/4253136b-4276-42e8-8d93-267af43562bd)

![Style css](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/ff8f6e83-37f6-4988-824c-9b10ac4ea3ca)

![User Page](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/4010c245-11e5-4233-a6a7-2b3a2e87860b)

![Config js](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/68c45f1d-b274-40f7-9790-3a730ff559f5)

![Index js](https://github.com/RohanShrivastava08/InnoByte-Services-Internship/assets/94133270/da81b5eb-84a3-4ec6-9aed-0f2ea30585ab)



### License
- This project is licensed under the MIT License.
