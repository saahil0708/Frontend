import React from "react";
import "./Login.css";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-page">

      <div className="login-card">

        <h2 className="login-title">Login</h2>

        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="" />
        </div>

        <p className="forgot">Forgot Password ?</p>

        <button className="login-btn">Sign in</button>

        <div className="divider">
          <span></span>
          <p>Login with social accounts</p>
          <span></span>
        </div>

        <div className="social-icons">
          <FaGoogle />
          <FaTwitter />
          <FaGithub />
        </div>

        <p className="signup">
          Don't have an account? <span>Sign up</span>
        </p>

      </div>

    </div>
  );
};

export default Login;