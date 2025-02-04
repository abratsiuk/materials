import {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import { TodoList } from './components/TodoList';
import { UserList } from './components/UserList';

import {loadUsers} from './store/users/user-actions'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers())
  }, []);

  return (
    <div className="App">
      <h1>Hello Redux Thunk</h1>
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;
