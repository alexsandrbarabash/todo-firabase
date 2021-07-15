import { USER_CHANGE } from '../constants/user-constant';

const defaultState = {
  user: null,
  tasks: [
    {
      id: 1,
      title: 'item1',
      status: false
    },
    {
      id: 2,
      title: 'item2',
      status: false
    },
    {
      id: 3,
      title: 'item3',
      status: false
    }
  ]
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
