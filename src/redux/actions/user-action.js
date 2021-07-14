import { USER_CHANGE } from '../constants/user-constant';

const userChange = (user) => ({
  type: USER_CHANGE, payload: user
});

export { userChange };
