import React from 'react';
import { UserList } from '../helpers/UserList';
import '../styles/About.css';

function EmployeeList() {
  {/*This function maps through the users list and renders them to the page.*/}
  return (
    <div className="employeeList">
      <div className="employees">
        {UserList.map((user, key) => {
          return (
            <div className="employee">
              <ul>
                <li>
                 <h2>{user.name}</h2>
                 <p>ID: <b>{user.id}</b></p>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmployeeList;
