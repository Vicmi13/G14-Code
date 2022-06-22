import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./UsersScreen.css";

export const UsersScreen = ({ sendIdUser, nameProp }) => {
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setusers(res.data);
    } catch (error) {
      console.log("erro API", error);
    }
  };

  useEffect(() => {
    // getUsers();

    // IIFE -
    (async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setusers(data);
      } catch (error) {
        console.log("erro API", error);
      }
    })();
  }, []);

  useEffect(() => {
    console.log("nameProp", nameProp);
  }, [nameProp]);

  return (
    <div className="App App-header">
      {users.map((user) => (
        <p key={user.id} onClick={() => sendIdUser(user.id, 40)}>
          {user.name}
        </p>
      ))}
    </div>
  );
};
