import React from 'react';
import { DepartmentList } from '../helpers/DepartmentList';
import DepartmentItem from '../components/DepartmentItem';
import DepartmentInfo from '../components/DepartmentInfo';
import { Link } from 'react-router-dom';
import '../styles/Departments.css';

function Departments() {
  {/*This function maps through the department list and renders them to the page*/}
  return (
    <div className="departments">
      <h1 className="departmentTitle">Departments</h1>
      <div className="departmentList">
        {DepartmentList.map((depItem, key) => {
          return (
            <div className="departmentItem">
              <Link to={`/departments/${depItem.id}`} className="departmentItemLink">
                <DepartmentItem
                  key={key}
                  image={depItem.image}
                  name={depItem.name}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Departments;
