import React from 'react';
import CoffeeBeans from '../assets/coffeeBeans.jpg';

function About() {
  return (
    <div className="h-72.5vh flex flex-col">
      <div className="bg-cover h-60vh" style={{ backgroundImage: `url(${CoffeeBeans})` }}></div>
      <div className="mt-2 mx-1 flex flex-col h-2/3 items-center">
        <h1 className='text-3xl'>ABOUT US</h1>
        <p className='text-sm text-center w-4/5'>
          Ex enim proident occaecat voluptate dolor adipisicing non cupidatat deserunt. Eiusmod incididunt commodo labore minim occaecat dolor do anim incididunt elit ea ipsum. Aute culpa ut voluptate ullamco nulla dolore labore eiusmod veniam ut consectetur dolor duis.
        </p>
      </div>
    </div>
  );
}

export default About;
