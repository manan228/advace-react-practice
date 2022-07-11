const UserList = (props) => {
  return (
    <div>
      <ul>
        {props.user.map(user => <li key={user.userName}>{`${user.userName} (${user.userAge} years old)`}</li>)}
      </ul>
    </div>
  );
};

export default UserList;
