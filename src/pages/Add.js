import React, { useState, useEffect } from 'react';
import PersonTyping from '../assets/beach.jpg';
import '../styles/Add.css';
 
function Add() {
  const [depName, setDepName] = useState('');
  const [depTeam, setDepTeam] = useState('');
  const [depLead, setDepLead] = useState('');
  const [teamMembers, setTeamMembers] = useState('');
  const [teamLead, setTeamLead] = useState('');
  const [userName, setUserName] = useState('');


  async function postNewDep() { //Function for posting a new department
    const name = depName;
    const inCharge = depLead;
    const team = depTeam
    const data = { name, team, inCharge }
    console.log(data);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const response = await fetch('http://localhost:8000/departments', options);
    const json = await response.json();
    console.log(json);
  }

  async function postNewTeam() { //Function for posting a new team
    const people = teamMembers;
    const inCharge = teamLead;
    const data = { people, inCharge }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const response = await fetch('http://localhost:8000/teams', options);
    const json = await response.json();
    console.log(json);
  }

  async function postNewUser() { //Function for posting a new employee
    const name = userName;
    const data = { name }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const response = await fetch('http://localhost:8000/users', options);
    const json = await response.json();
    console.log(json);
  }

  return (
    <div className="add">
      <div className="leftSide" style={{ backgroundImage: `url(${PersonTyping})` }}></div>
      <div className="rightSide">
        {/*Input fields for users to add a new department.*/}
        <h3>Add a New Department</h3>
        <form id="dep-form" onSubmit={postNewDep}>
          <label htmlFor="depName">Department Name</label>
          <input
            name="depName"
            placeholder="Enter department name..."
            type="text"
            value={depName}
            onChange={(e) => setDepName(e.target.value)}
          />
          <label htmlFor="depName">Department Team</label>
          <input
            name="depTeam"
            placeholder="Enter id of team(s) in department..."
            type="text"
            value={depTeam}
            onChange={(e) => setDepTeam(e.target.value)}
          />
          <label htmlFor="depLead">Department Lead</label>
          <input
            name="depLead"
            placeholder="Enter department lead..."
            type="text"
            value={depLead}
            onChange={(e) => setDepLead(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        {/*Input fields for users to add a new team.*/}
        <h3>Add a New Team</h3>
        <form id="team-form" onSubmit={postNewTeam}>
          <label htmlFor="teamMembers">Team Members</label>
          <input
            name="teamName"
            placeholder="Enter id numbers of team members... (ex: 1, 2, 3)"
            type="text"
            value={teamMembers}
            onChange={(e) => setTeamMembers(e.target.value)}
          />
          <label htmlFor="teamLead">Team Lead</label>
          <input
            name="teamLead"
            placeholder="Enter team lead..."
            type="text"
            value={teamLead}
            onChange={(e) => setTeamLead(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        {/*Input fields for users to add a new user(employee).*/}
        <h3>Add a New Employee</h3>
        <form id="user-form" onSubmit={postNewUser}>
          <label htmlFor="userName">Employee Name</label>
          <input
            name="userName"
            placeholder="Enter employee's full name..."
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}



export default Add;
