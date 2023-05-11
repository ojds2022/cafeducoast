import React from 'react';

function MenuItem({ image, name, price, id, team, inCharge }) {
  return (
    <div className="hover:text-white">
      <div className="bg-cover bg-center h-52 rounded-t-xl" style={{ backgroundImage: `url(${image})` }}></div>
      <h1 className='text-2xl pt-2'> {name} </h1>
      <h3 className='text-xl'> {price} </h3>
    </div>
  );
}

export default MenuItem;
