import { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UsersList from './components/Users/UsersList';

import './App.css';

function App() {
  const [usersData, setUsersData] = useState([]);

  const addNewUser = (newUser) => {
    setUsersData((prevUsersData) => [newUser, ...prevUsersData]);
  };

  return (
    <div className="App">
      <UserForm addNewUser={addNewUser}></UserForm>
      <UsersList usersData={usersData}></UsersList>
      
    </div>
  );
}

export default App;
