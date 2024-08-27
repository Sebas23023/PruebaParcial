const express = require('express');
const app = express();
const connectDB = require('./config/dbConfig');
const inventoryRoutes = require('./routes/inventoryRoutes');
const errorHandler = require('./utils/errorHandler');

connectDB();

app.use(express.json());
app.use('/api/inventory', inventoryRoutes);

app.use(errorHandler); // Use the error handler

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
