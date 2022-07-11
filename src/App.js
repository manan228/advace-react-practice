import { useState } from "react";
import "./App.css";
import AddUser from "./Component/AddUser";
import UserList from "./Component/UserList";
import Error from "./Component/Error";

let userList = [
  {
    userName: "Manan",
    userAge: 21,
  },
  {
    userName: "Ishani",
    userAge: 25,
  },
  {
    userName: "Rutvi",
    userAge: 23,
  },
];

function App() {
  const [user, setUser] = useState(userList);
  const [isEmpty, setIsEmpty] = useState(false);

  const addUser = (newUser) => {
    // userList = [newUser, ...userList]
    // return setUser(userList);

    return setUser((prevState) => [newUser, ...prevState]);
  };

  return (
    <div className="App">
      {!isEmpty && <AddUser onAddUser={addUser} flag={setIsEmpty} />}
      {!isEmpty && <UserList user={user} />}
      {isEmpty && <Error flag={setIsEmpty} />}
    </div>
  );
}

export default App;
