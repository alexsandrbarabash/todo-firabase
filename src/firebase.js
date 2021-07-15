import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC-DysyQtvY-6Q7rz3FNqa2moUPveRqcNg',
  authDomain: 'todo-d560d.firebaseapp.com',
  projectId: 'todo-d560d',
  storageBucket: 'todo-d560d.appspot.com',
  messagingSenderId: '148822550312',
  appId: '1:148822550312:web:4ce8e797dfa26b6f37d21d'
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const auth = firebase.auth();

export const firestore = firebase.firestore();
