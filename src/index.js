import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
// put your reducers here!

// This reducer function handles changes to the current speed state
const speedReducer = (state = 0, action) => {
  // If the action type is 'CHANGE_SPEED', update the state with the new speed
  if (action.type === 'CHANGE_SPEED') {
    state += action.payload
  }
  // Always return the updated state
  return state;
}

// This reducer function handles changes to the list of passengers
const allPassengers = (state = ['Seth'], action) => {
  // If the action type is 'ADD_PASSENGER', add the new passenger to the state array
  if (action.type === 'ADD_PASSENGER'){
    return [...state, action.payload];
  }
  // Always return the updated state
  return state;
}

// Combine your reducers here
const rootReducer = combineReducers({
  speed: speedReducer,
  allPassengers: allPassengers,
  // Add other reducers here, if any
});




// be sure to combine your reducers!
const storeInstance = createStore(
  // reducers,
  rootReducer,
  applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

export {storeInstance};
