import { ADD_PEOPLE } from "../constants/action-types";

const initialState = {
  people: [
    {
      firstName: "Gary",
      lastName: "Lemon",
      id: 0
    },
    {
      firstName: "John",
      lastName: "Doe",
      id: 1
    },
  ],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_PEOPLE) {

    // state.people.push(action.payload)
    return Object.assign({}, state, {
      people: state.people.concat(action.payload)
    })
  }
    return state;
}

export default rootReducer;