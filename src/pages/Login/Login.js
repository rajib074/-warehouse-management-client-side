import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Google from "../Google/Google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
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
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Login;
