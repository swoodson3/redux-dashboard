import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

// This component displays a form to add passengers and lists all current passengers
function Passengers() {
  const dispatch = useDispatch();
  const allPassengers = useSelector(store => store.allPassengers);
  const [name, setName] = useState('');

// This function handles the form submission and dispatches an action to add a new passenger to the store
  const handleSubmit = (event) => {
    event.preventDefault(); 
    dispatch ({ type: 'ADD_PASSENGER', payload: name });
    setName('');
}

// This function returns the JSX that will be displayed on the DOM
    return (
      <div>
      <h2>Passengers</h2>

 {/* This form allows users to submit a new passenger */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Add Passenger</button>
      </form>

       {/* This list displays all current passengers */}
      <ul>
        {allPassengers.map((passenger, index) => (
          <li key={index}>{passenger}</li>
        ))}
      </ul>
    </div>
    )
  
}

// We export this component as the default export
export default Passengers;