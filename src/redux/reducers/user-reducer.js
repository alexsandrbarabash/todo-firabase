import { USER_CHANGE } from '../constants/user-constant';

const defaultState = {
  user: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_CHANGE:
      return {
        ...state, user: action.payload
      };
    default:
      return state;
  }

};

export default reducer;
