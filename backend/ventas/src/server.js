const express = require('express');
const app = express();
const connectDB = require('./config/dbConfig');
const salesRoutes = require('./routes/salesRoutes');
const errorHandler = require('./utils/errorHandler');

connectDB();

app.use(express.json());
app.use('/api/sales', salesRoutes);

app.use(errorHandler); // Use the error handler

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
