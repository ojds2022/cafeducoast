import React, {useEffect, useState} from 'react';
import { MenuList } from '../helpers/menuList';
import { Link, useLinkClickHandler } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/menu.css';

function DrinkInfo() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const subtract = document.getElementById('subtract');
    const add = document.getElementById('add');

    subtract.addEventListener('click', (event) => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      } else {
        return;
      }
    });

    add.addEventListener('click', (event) => {
      setQuantity(quantity + 1);
    });
  }, [quantity]);

  return (
    <div className="flex items-center justify-center h-screen bg-light-grey">
      {MenuList.filter(drinkInfo => drinkInfo.id === id).map((drinkInfo, key) => {
        return (
          <div className="grid w-5/6 text-center bg-white place-content-center menuInfoCard rounded-xl h-3/5" key={key}>
            <h1 className='text-3xl'>{drinkInfo.name}</h1>
            <p className='my-5'>Quantity: <button id='subtract' className='px-2 mr-1 rounded-tl rounded-bl cursor-pointer hover:bg-bone-white hover:text-off-black bg-off-black text-bone-white'>-</button><span>{quantity}</span><button id='add' className='cursor-pointer hover:bg-bone-white hover:text-off-black ml-1 rounded-tr rounded-br px-1.5 bg-off-black text-bone-white'>+</button></p>
            <p> 
               {quantity > 0 ?
                  <Link to={`/order/${drinkInfo.id}`}>
                    <button className='p-3 rounded cursor-pointer bg-off-black text-bone-white hover:bg-bone-white hover:text-black'>Add to order</button>
                  </Link>
                  :
                  <button className='p-3 rounded cursor-pointer bg-off-black text-bone-white hover:bg-bone-white hover:text-black'>Add to order</button>
               }
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default DrinkInfo;
