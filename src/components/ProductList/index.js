import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSpending } from '../../redux/ProductSlice/productsSlice';

function ProductList({ product }) {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleChangeBuy = (e) => {
    const inputAmount = e.target.value || '0';
    setAmount(inputAmount);
    dispatch(addSpending({ ...product, amount }));
  };

  const handleBuySellClick = (increment) => {
    let newAmount = parseInt(amount) + increment;
    if (newAmount >= 0) {
      setAmount(newAmount);
      dispatch(addSpending({ ...product, amount: newAmount }));
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center mt-10">
      <div
        key={product.id}
        className="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <button>
          <img
            className="rounded-t-lg"
            src={product.image}
            alt={product.name}
          />
        </button>
        <div className="p-5">
          <button>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </button>
          <p>${product.price}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
          <div className="flex justify-center items-center">
            <div>
              <button
                onClick={() => handleBuySellClick(-1)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Sat
              </button>
            </div>
            <div className="ml-2 mr-2 border-2 border-slate-200 rounded-sm">
              <input
                min={0}
                value={amount}
                onChange={(e) => handleChangeBuy(e)}
                type="number"
                className="ml-auto text-center appearance-none"
              />
            </div>
            <div>
              <button
                onClick={() => handleBuySellClick(1)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
