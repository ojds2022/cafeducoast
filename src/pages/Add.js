import React, { useState, useEffect } from 'react';
import CoffeeBeans from '../assets/personTyping.jpg';
import '../styles/Add.css';



function Add() {
  const [backendData, setBackendData] = useState([{}]);


  return (
    <div className="add">
      <div className="leftSide" style={{ backgroundImage: `url(${CoffeeBeans})` }}></div>
      <div className="rightSide">
        <h2>Add a New Department</h2>
        {/*Input fields for users to add a new department.*/}
        <form id="dep-form" method="POST">
          <label htmlFor="name">Department Name</label>
          <input id="addDepartment" name="name" placeholder="Enter department name..." type="text" />
          <label htmlFor="inCharge">Department Lead</label>
          <input name="inCharge" placeholder="Enter department lead..." type="text" />
          <button type="submit">Submit</button>
        </form>
        <h2>Add a New Team</h2>
        {/*Input fields for users to add a new team.*/}
        <form id="team-form" method="POST">
          <label htmlFor="name">Team Name</label>
          <input name="name" placeholder="Enter team name..." type="text" />
          <label htmlFor="inCharge">Team Lead</label>
          <input name="inCharge" placeholder="Enter team lead..." type="text" />
          <button type="submit">Submit</button>
        </form>
        <h2>Add a New User</h2>
        {/*Input fields for users to add a new user(employee).*/}
        <form id="user-form" method="POST">
          <label htmlFor="name">User Name</label>
          <input name="name" placeholder="Enter user's name..." type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}


export default Add;
