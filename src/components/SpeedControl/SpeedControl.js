import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

function SpeedControl() {
  // Get the `dispatch` function from the `react-redux` hook
  const dispatch = useDispatch();
  // Get the current speed value from the Redux store
  const currentSpeed = useSelector(store => store.speed)

  // Handler function for increasing the speed
  const addSpeed = () => {
    // Dispatch an action to the Redux store to increase the speed by 1
    dispatch({ type: 'CHANGE_SPEED', payload: 1 });
  }

  //Hander function for decreasing the speed 
  const minusSpeed = () => {
    if (currentSpeed > 0) {
      // Dispatch an action to the Redux store to decrease the speed by 1
      dispatch({type:'CHANGE_SPEED', payload: -1});
    } else {
      // Show an alert if the current speed is already 0
      alert('Cannot go below 0!');
    }
  }


   // Render the UI for the speed control component
  return (
    <div>
      <h2>Speed Control</h2>

      <button onClick={addSpeed}>Increase Speed</button>
      <p>SPEED: {currentSpeed}</p>
      <button onClick={minusSpeed}>Decrease Speed</button>

    </div>
  )

}

export default SpeedControl;