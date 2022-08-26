import React from 'react';
import { TeamList } from '../helpers/TeamList';
import { useParams } from 'react-router-dom';
import '../styles/TeamInfo.css';

{/*Once a user clicks on a team id, this locates them to
  a page with additional information about that team.*/}
function TeamInfo() {
  const { id }: { id: string } = useParams();
  {console.log(id)}
  return (
    <div >
      {TeamList.filter(teamInfo => teamInfo.id === id).map((teamInfo, key) => {
        return (
          <div className="teamInfo" key={key}>
            <h1> Team leader: {teamInfo.teamLead} </h1>
            <p> Team ID: <b>{teamInfo.id}</b> </p>
            <p> Team member IDs: <b>{teamInfo.people}</b> </p>
          </div>
        );
      })}
    </div>
  );
}

export default TeamInfo;
