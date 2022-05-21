import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Google from "../Google/Google";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import axios from "axios";
import { PropagateLoader } from "react-spinners";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  let errorElement;

  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    toast.error(`${error?.message}`);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email || password) {
      await signInWithEmailAndPassword(email, password);
      const { data } = await axios.post("http://localhost:5000/login", { email });
      console.log(data);
      localStorage.setItem("accessToken", data.token);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Successfully Login");
    } else {
      toast.error("Please enter valid details");
    }
  };

  const navigateSignup = (event) => {
    navigate("/signup");
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Password reset email sent successfully");
    } else {
      toast.error("Please enter email");
    }
  };

  return (
    <div className="login-form">
      <Form onSubmit={handleSubmit}>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          ref={emailRef}
          placeholder="Enter your email"
          required
        ></input>

        <label htmlFor="exampleInputEmail1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          ref={passwordRef}
          placeholder="Enter password"
          required
        ></input>
        <div className="mb-3 form-text">
          <span className="btn-link pointer" onClick={resetPassword}>
            Forget Password
          </span>
        </div>
        <button className="btn-control" type="submit">
          LOGIN
        </button>
      </Form>
      <PropagateLoader className='mx-auto mt-4' color={"#36D7B7"} loading={loading} size={30} />
      {errorElement}
      <div className="login-google">
        <p>
          New to Genius Car?{" "}
          <Link
            to="/signup"
            className="text-danger pe-auto text-decoration-none"
            onClick={navigateSignup}
          >
            Please Signup
          </Link>{" "}
        </p>

        <Google></Google>
      </div>
    </div>
  );
};

export default Login;
