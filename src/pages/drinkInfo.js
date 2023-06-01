import React from 'react';
import { MenuList } from '../helpers/menuList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/menu.css';

function DrinkInfo() {
  const { id } = useParams();

  return (
    <div className="flex items-center justify-center h-screen bg-light-grey">
      {MenuList.filter(drinkInfo => drinkInfo.id === id).map((drinkInfo, key) => {
        return (
          <div className="w-5/6 text-center bg-white menuInfoCard rounded-xl h-5/6" key={key}>
            <h1 className='mt-5 text-3xl'>{drinkInfo.name}</h1>
           
            <p> 
               <Link to={`/order/${drinkInfo.id}`}>
                   <button className='p-3 mt-20 rounded cursor-pointer bg-off-black text-bone-white hover:bg-bone-white hover:text-black'>Add to order</button>
               </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default DrinkInfo;
