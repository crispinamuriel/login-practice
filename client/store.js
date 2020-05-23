import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  user: {}
}

//action type
const GET_USER = 'GET_USER';

//action creator
function gotUser(user) {
  return {
    type: GET_USER,
    user
  };
}

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

/*

Open client/store.js
Write an action type to represent getting a logged-in user from the server
Write an action creator, which should create an action that includes your action type and the user you would receive
Check for your action type in your reducer. When your reducer receives an action with this type, it should update the user on state with the user from the action.

*/
