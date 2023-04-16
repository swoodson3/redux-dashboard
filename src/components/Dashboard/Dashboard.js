import React from 'react';
import { useSelector } from 'react-redux';

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

// This function displays the dashboard for our app
function Dashboard() {

  // These constants retrieve data from our Redux store
  const currentSpeed = useSelector(store => store.speed);
  const allPassengers = useSelector(store => store.allPassengers);
  
  // This function returns the JSX that will be displayed on the DOM
  return (
    <div>
      <h2>Dashboard</h2>
      {/* This line displays the current speed */}
      <p>SPEED: {currentSpeed}</p>
      {/* This line displays the number of passengers */}
      <p>PASSENGER COUNT: {allPassengers.length}</p>
    </div>
  );
}

// We export this component as the default export
export default Dashboard;
