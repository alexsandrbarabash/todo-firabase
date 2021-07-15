import { TASKS_CHANGE, USER_CHANGE } from '../constants/user-constant';

const userChange = (user) => ({
  type: USER_CHANGE, payload: user
});


const tasksChange = (tasks) => ({
  type: TASKS_CHANGE, payload: tasks
});

export { userChange, tasksChange };
