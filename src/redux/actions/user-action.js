import {
  TASKS_CHANGE,
  USER_CHANGE,
  SORT,
  FILTER_BY_STATUS,
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
  if (value === 0) {
    return {
      type: SORT, payload: {sortField: 'title', order: 'asc'}
    };
  }

  if (value === 1) {
    return {
      type: SORT, payload: {sortField: 'title', order: 'desc'}
    };
  }
  if (value === 2) {
    return {
      type: SORT, payload: {sortField: 'status', order: 'asc'}
    };
  }

  if (value === 3) {
    return {
      type: SORT, payload: {sortField: 'status', order: 'desc'}
    };
  }
};

const sortByStatus = (value) => {

  if (value === 1) {
    return {
      type: FILTER_BY_STATUS, payload: [true]
    };
  }

  if (value === 2) {
    return {
      type: FILTER_BY_STATUS, payload: [false]
    };
  }

  return {
    type: FILTER_BY_STATUS, payload: [true, false]
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
