import './User.scss';

const User = ({ name, age }) => {
  return (
    <li className="users-list__item">
      <div className="users-list__name">{name}</div>
      <div className="users-list__age"><span>{age}</span> years old</div>
    </li>
  );
};

export default User;
