import { useState } from "react";

const AddUser = (props) => {
  const [newAge, setAge] = useState();
  const [newUsername, setUsername] = useState();

  const onSubmitHandler = (event) => {
    // event.preventDefault();

    if(newAge === undefined || newUsername === undefined) {

        console.log(props)
        props.flag(true)
        return;
    }

    if(newAge <= 0) {

        props.flag(true);
        return;
    }

    const newUser = {

        userName: newUsername,
        userAge: newAge
    }

    props.onAddUser(newUser)
  };

  const onUsernameChangeHandler = (event) => {

    setUsername(event.target.value)
  };

  const onAgeChangeHandler = (event) => {

    setAge(event.target.value)
  };

  return (
    <div>
      <form>
        <div>
          <label>Username</label>
          <input type="text" onChange={onUsernameChangeHandler}></input>
        </div>
        <div>
          <label>Age</label>
          <input type="text" onChange={onAgeChangeHandler}></input>
        </div>
        <button type="submit" onClick={onSubmitHandler}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
