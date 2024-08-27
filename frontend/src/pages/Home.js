import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import SaleForm from '../components/SaleForm';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <ProductList />
        <SaleForm />
      </main>
    </div>
  );
};

export default Home;
