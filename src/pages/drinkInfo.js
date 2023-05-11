import React from 'react';
import { MenuList } from '../helpers/menuList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/menu.css';

function DrinkInfo() {
  const { id } = useParams();

  return (
    <div className="h-72.5vh flex justify-center items-center bg-light-grey">
      {MenuList.filter(drinkInfo => drinkInfo.id === id).map((drinkInfo, key) => {
        return (
          <div className="menuInfoCard rounded-xl w-5/6 h-5/6 text-center bg-white" key={key}>
            <h1 className='text-3xl mt-5'>{drinkInfo.name}</h1>
           
            <p> 
               <Link to={`/order/${drinkInfo.id}`}>
                  <button className='rounded p-3 bg-off-black text-bone-white mt-20 cursor-pointer hover:bg-bone-white hover:text-black'>Add to order</button>
                </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default DrinkInfo;
