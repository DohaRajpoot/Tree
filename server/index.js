require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact'); // Import contact routes

// Database connection
connection();

// Middleware
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes); // Use contact routes

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
