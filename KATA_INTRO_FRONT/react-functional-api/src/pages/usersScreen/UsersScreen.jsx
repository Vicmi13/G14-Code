import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import "./UsersScreen.css";

export const UsersScreen = () => {
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setusers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};
