import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilter } from '../../redux/actions/user-action';

const withLogging = Component => props => {
  const history = useHistory();

  const user = useSelector(state => state.userReducer.user);
  const dispath = useDispatch();

  useEffect(() => {

    dispath(clearFilter());

    if (!user) {
      history.push('/auth');
    }
  }, [user, history]);

  return <Component {...props} />;
};
export default withLogging;
