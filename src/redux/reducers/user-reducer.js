import {
  TASKS_CHANGE,
  USER_CHANGE,
  SORT,
  FILTER_BY_STATUS,
  SEARCH,
  CLEAR_FILTER
} from '../constants/user-constant';

const defaultState = {
  user: null,
  tasks: [],
  search: '',
  showStatus: [true, false],
  sortOrder: 'asc',
  sortField: 'title'
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
    case SORT:
      return {
        ...state, sortOrder: action.payload.order, sortField: action.payload.sortField,
      };
    case FILTER_BY_STATUS:
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
        sortOrder: 'asc',
        sortField: 'title'
      };
    default:
      return state;
  }

};

export default reducer;
