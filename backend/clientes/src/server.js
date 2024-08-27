const express = require('express');
const app = express();
const connectDB = require('./config/dbConfig');
const clientsRoutes = require('./routes/clientsRoutes');

// Define el puerto solo una vez
const PORT = process.env.PORT || 5003;

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', clientsRoutes);

// Inicia el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
