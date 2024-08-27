const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  products: [{ productId: mongoose.Schema.Types.ObjectId, quantity: Number }],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sale', saleSchema);
