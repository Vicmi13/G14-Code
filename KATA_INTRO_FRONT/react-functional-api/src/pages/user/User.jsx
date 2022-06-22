import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const User = (props) => {
  const params = useParams();

  useEffect(() => {
    console.log("params", params.id);
    // Llamar API
    // axios.get(smashingMagazine/detail/${params.userID})
  }, []);

  return <h2>User</h2>;
};
