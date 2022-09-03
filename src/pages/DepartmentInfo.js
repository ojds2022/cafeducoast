import React from 'react';
import { DepartmentList } from '../helpers/DepartmentList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/Departments.css';

{/*After a user clicks on one of the departments,
  they're directed to this page where there's additional
  information about that specific department.*/}
function DepartmentInfo() {
  const { id }: { id: string } = useParams();

  return (
    <div className="departmentInfo">
      {DepartmentList.filter(depInfo => depInfo.id === id).map((depInfo, key) => {
        return (
          <div className="departmentInfoCard"key={key}>
            <h1>{depInfo.name}</h1>
            <p className="departmentID">Department ID: <b>{depInfo.id}</b></p>
            <p className="departmentTeam">
              Team in department: <Link to={`/teams/${depInfo.team}`}>
                  <b>Team {depInfo.team}</b>
                </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default DepartmentInfo;
