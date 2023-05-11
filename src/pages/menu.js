import React from 'react';
import { MenuList } from '../helpers/menuList';
import MenuItem from '../components/menuItem';
import DrinkInfo from './drinkInfo';
import { Link } from 'react-router-dom';
import '../styles/menu.css';

function Menu() {
  return (
    <div className="menu flex flex-col items-center">
      <h1 className="menuTitle text-6xl font-thin mt-4">Menu</h1>
      <div className="menuList w-3/4 grid grid-cols-1 place-items-center">
        {MenuList.map((menuList, key) => {
          return (
            <div className="departmentItem cursor-pointer hover:bg-off-black text-center m-10 h-80 w-72 rounded-xl hover:text-white" key={key}>
              <Link to={`/menu/${menuList.id}`} className="menuItemLink">
                <MenuItem
                  key={key}
                  image={menuList.image}
                  name={menuList.name}
                  price={menuList.price}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
