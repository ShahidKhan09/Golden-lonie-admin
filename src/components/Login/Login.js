import React, { useState, useEffect } from "react";
import "./login.scss";
import { Link } from "react-router-dom";




const Login = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setError] = useState("");


 

  const [errors, setErrors] = useState({});



  return (
    <>
      <section className="main-login">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-sm-12">
              <div className="maincard">
                <div className="logincard">
                  <div className="innerlogo">
                    <img src="\logo.svg" alt="img" className="img-fluid" />
                  </div>
                  <div className="cardtext">
                    <h6>log in to your admin account</h6>
                    <p>
                    Please enter your credentials below to log into your account.
                    </p>
                    <input
                      type="text"
                      placeholder="Username or Email"
                    />
                    <div
                      style={{ position: "unset" }}
                      className="text-danger mb-4"
                    >
                      <small>{errors.username}</small>
                    </div>
                    <div className="parent">
                      <input
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                      />
                      <div
                        style={{ position: "unset" }}
                        className="text-danger mb-4"
                      >
                        <small>{errors.password}</small>
                      </div>
                      <img
                        src="\assets\eye.svg"
                        className="img-fluid"
                        alt="img"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                  </div>
                  <div className="chec mb-4">
                    <label class="material-checkbox">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                      Keep me logged in
                    </label>
                  </div>
                  {/* <Link to="dashboard"> */}
                  <div className="mt-5">
                    <div
                      style={{ position: "unset" }}
                      className="text-danger mb-2"
                    >
                      <small>{showError}</small>
                    </div>
                    <div className="endbtn">
                      <Link to="/dashboard"><button>Log In</button></Link>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
