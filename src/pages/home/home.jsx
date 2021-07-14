import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const uid = useSelector(state => state.userReducer.uid);
  useEffect(() => {
    if (!uid) {
      history.push('/auth');
    }
  }, [uid]);

  return (
    <div>
      Home
    </div>
  );
};

export default Home;
