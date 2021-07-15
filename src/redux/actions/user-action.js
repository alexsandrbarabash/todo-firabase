import {
  TASKS_CHANGE,
  USER_CHANGE,
  CHANGE_SORT_BY_TITLE_CHANGE,
  SORT_BY_STATUS,
  SEARCH,
  CLEAR_FILTER
} from '../constants/user-constant';

const userChange = (user) => ({
  type: USER_CHANGE, payload: user
});


const tasksChange = (tasks) => ({
  type: TASKS_CHANGE, payload: tasks
});

const changeSortByTitle = (value) => {
  // value == 0
  if (!value) {
    return {
      type: CHANGE_SORT_BY_TITLE_CHANGE, payload: 'asc'
    };
  }

  return {
    type: CHANGE_SORT_BY_TITLE_CHANGE, payload: 'desc'
  };
};

const sortByStatus = (value) => {

  if (value === 1) {
    return {
      type: SORT_BY_STATUS, payload: [true]
    };
  }

  if (value === 2) {
    return {
      type: SORT_BY_STATUS, payload: [false]
    };
  }

  return {
    type: SORT_BY_STATUS, payload: [true, false]
  };
};

const searchByTitle = (value) => ({
  type: SEARCH, payload: value
});

const clearFilter = () => ({type: CLEAR_FILTER});

export {
  userChange,
  tasksChange,
  changeSortByTitle,
  sortByStatus,
  searchByTitle,
  clearFilter
};
