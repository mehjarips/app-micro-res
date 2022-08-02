import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div class="container animation form login">
      <div class="login-wrapper">
        <h3 class="title">Sign in</h3>
        <form>
          <div class="form-group input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="user-email-login"
              class="user-email"
            />
          </div>
          <div class="form-group input">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="user-password-login"
              class="user-password"
            />
          </div>
          <button type="submit" class="button color-1 login" id="button-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
