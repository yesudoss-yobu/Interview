import React from "react";
import "./login.css"

const Login = () => {
  return (
    <>
      <div className="container">
        <div>
          <label htmlFor="userName">UserName</label>
          <input id="userName" type="text" />
        </div>
        <div>
          <label htmlFor="userName">password</label>
          <input id="userName" type="text" />
        </div>
      </div>
    </>
  );
};

export default Login;
