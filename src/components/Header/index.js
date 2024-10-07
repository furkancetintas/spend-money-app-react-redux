import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const leftMoney = useSelector((state) => state.products.leftMoney);
  console.log(leftMoney);

  return (
    <div className="flex items-center justify-center bg-slate-100 w-full sticky top-0 py-4">
      <span className="flex items-center justify-center text-black font-bold text-4xl">
        $ {leftMoney.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
      </span>
    </div>
  );
}

export default Header;
