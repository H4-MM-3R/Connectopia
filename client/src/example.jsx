import React from "react";
import { useSelector } from "react-redux";

const MyComponent = () => {
  // Access the token value from the Redux store
  const token = useSelector((state) => state.token);

  return (
    <div>
      <h1>Hi</h1>
      <p>Token: {token}</p>
    </div>
  );
};

export default MyComponent;
