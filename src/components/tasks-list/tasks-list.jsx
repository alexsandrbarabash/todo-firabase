import React from 'react';
import { useSelector } from 'react-redux';
import Task from '../task';
import { firestore } from '../../firebase';


const TasksList = () => {

  const tasks = useSelector(state => state.userReducer.tasks);
  const currentUser = useSelector(state => state.userReducer.user);

  const handlerDelete = (id) => {
    firestore
      .collection('users')
      .doc(currentUser.uid).collection('tasks')
      .doc(id)
      .delete()
      .catch(e => console.log(e.message));
  };

  const handlerSetStatus = (id, status) => {
    firestore
      .collection('users')
      .doc(currentUser.uid).collection('tasks')
      .doc(id)
      .update({status: !status})
      .catch(e => console.log(e.message));
  };

  return (
    <>
      {tasks.map((item) => (
        <Task
          status={item.status}
          onDelete={() => handlerDelete(item.id)}
          onSetStatus={() => handlerSetStatus(item.id, item.status)}
          title={item.title}
          id={item.id}
          key={item.id}/>))}
    </>
  );
};

export default TasksList;
