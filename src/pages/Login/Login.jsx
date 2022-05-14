import React from "react";
import "./Login.css";
import LogoS from "../../assets/images/logo.jpg";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
function Login() {
  const [, dispatch] = useStateValue();
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => {
        console.log("Login failed", error);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={LogoS} alt="" />
        <h1>Welcome to Stugether</h1>
        <p>Bringing Students Together!</p>
        <Button onClick={login}>Log in with Google</Button>
        <br></br>
        {/* <Button onClick={login}>Log in with Email Id</Button> */}
      </div>
    </div>
  );
}

export default Login;
