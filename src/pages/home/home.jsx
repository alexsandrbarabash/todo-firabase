import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const user = useSelector(state => state.userReducer.user);
  useEffect(() => {
    if (!user) {
      history.push('/auth');
    }
  }, [user]);

  return (
    <div>
      Home
    </div>
  );
};

export default Home;
