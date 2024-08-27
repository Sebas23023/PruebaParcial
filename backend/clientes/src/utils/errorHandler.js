const express = require('express');
const app = express();
const connectDB = require('./config/dbConfig');
const clientsRoutes = require('./routes/clientsRoutes');
const errorHandler = require('./utils/errorHandler');

connectDB();

app.use(express.json());
app.use('/api/clients', clientsRoutes);

app.use(errorHandler); // Use the error handler

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
