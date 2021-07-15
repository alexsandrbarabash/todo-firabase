import { TASKS_CHANGE, USER_CHANGE } from '../constants/user-constant';

const defaultState = {
  user: null,
  tasks: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_CHANGE:
      return {
        ...state, user: action.payload
      };
    case TASKS_CHANGE:
      return {
        ...state, tasks: action.payload
      };
    default:
      return state;
  }

};

export default reducer;
