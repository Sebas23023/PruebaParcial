import React, { useState } from 'react';

const SaleForm = () => {
  const [clientId, setClientId] = useState('');
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const sale = { clientId, products, total };

    fetch('/api/sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sale),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Sale created:', data);
        setClientId('');
        setProducts([]);
        setTotal('');
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sale Form</h2>
      <label>
        Client ID:
        <input type="text" value={clientId} onChange={(e) => setClientId(e.target.value)} required />
      </label>
      <label>
        Products:
        <input
          type="text"
          value={products}
          onChange={(e) => setProducts(e.target.value.split(','))}
          required
        />
      </label>
      <label>
        Total:
        <input type="number" value={total} onChange={(e) => setTotal(e.target.value)} required />
      </label>
      <button type="submit">Submit Sale</button>
    </form>
  );
};

export default SaleForm;
