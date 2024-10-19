const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://EricLamoureux:<db_password>@cluster0.py4et.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.get('/', (req, res) => {
  res.send('Portfolio API running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
