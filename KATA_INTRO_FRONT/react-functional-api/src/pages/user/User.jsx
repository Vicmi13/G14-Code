import React, { useEffect } from "react";

export default function User(props) {
  useEffect(() => {
    console.log("props", props);
  }, []);

  return <div>User</div>;
}
