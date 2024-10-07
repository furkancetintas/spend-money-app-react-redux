import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../ProductList';

function MainProductList() {
  const products = useSelector((state) => state.products.products);
  return (
    <div>
      <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 my-4 ">
        {products.map((product) => (
          <ProductList product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default MainProductList;
