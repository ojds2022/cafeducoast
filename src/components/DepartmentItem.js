import React from 'react';

{/*Maps through keys in the department list.
  Used in the departments page to render department info.*/}
function DepartmentItem({ image, name, id, team, inCharge }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {name} </h1>
    </div>
  );
}

export default DepartmentItem;
