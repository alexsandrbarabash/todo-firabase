import {
  TASKS_CHANGE,
  USER_CHANGE,
  CHANGE_SORT_BY_TITLE_CHANGE,
  SORT_BY_STATUS,
  SEARCH,
  CLEAR_FILTER
} from '../constants/user-constant';

const defaultState = {
  user: null,
  tasks: [],
  search: '',
  showStatus: [true, false],
  sortByTitle: 'asc'
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
    case CHANGE_SORT_BY_TITLE_CHANGE:
      return {
        ...state, sortByTitle: action.payload
      };
    case SORT_BY_STATUS:
      return {
        ...state, showStatus: action.payload
      };
    case SEARCH:
      return {
        ...state, search: action.payload
      };
    case CLEAR_FILTER:
      return {
        ...state,
        search: '',
        showStatus: [true, false],
        sortByTitle: 'asc'
      };
    default:
      return state;
  }

};

export default reducer;
