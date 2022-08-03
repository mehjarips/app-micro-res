import React from "react";
import Button from "../components/button";
import "./login-row.scss";

const LoginRow = () => {
  return (
    <div className="login-row">
      <div className="login-action">
        <input type="text" placeholder="user name" />
        <input type="text" placeholder="password " />
        <Button varient="secondary">Login</Button>
      </div>
    </div>
  );
};

export default LoginRow;
