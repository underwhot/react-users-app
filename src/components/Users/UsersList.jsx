import User from './User';
import './UsersList.scss';

const UsersList = ({ usersData }) => {
  const noUsers = (
    <li style={{ textAlign: 'center' }}>
      There is no users. Please, add new one.
    </li>
  );

  return (
    <ul className="users-list">
      {usersData.length === 0
        ? noUsers
        : usersData.map((user) => (
            <User key={user.id} name={user.name} age={user.age}></User>
          ))}
    </ul>
  );
};

export default UsersList;
