import React from 'react';
import { MenuList } from '../helpers/menuList';
import MenuItem from '../components/menuItem';
import { Link } from 'react-router-dom';
import '../styles/menu.css';

function Menu() {
  return (
    <div className="flex flex-col items-center menu">
      <h1 className="mt-4 text-6xl font-thin menuTitle">Menu</h1>
      <div className="grid w-3/4 grid-cols-1 menuList place-items-center">
        {MenuList.map((menuList, key) => {
          return (
            <div className="m-10 text-center cursor-pointer departmentItem hover:bg-off-black h-80 w-72 rounded-xl hover:text-white" key={key}>
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
