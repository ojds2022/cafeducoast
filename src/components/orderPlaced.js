import React from 'react';

function OrderPlaced() {

  const getRandNumb = () => {
    return Math.floor(Math.random() * 10000);
  }

  return (
    <div className='h-screen text-xl text-center'>
      <h1 className='mt-24'>Order Placed!</h1>
      <h3>Thank you!</h3>
      <p>Order Number: #{getRandNumb()}</p>
    </div>
  );
}

export default OrderPlaced;
