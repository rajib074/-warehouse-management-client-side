import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Signup.css";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";
import Google from "../Google/Google";

const Signup = () => {
  const [agree, setAgree] = useState(false);
  const [
    createUserWithEmailAndPassword,
     user,
     loading,
     error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);


  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if(loading || updating){
        return <Loading></Loading>
    }

    if (user) {
     console.log('user', user);  
    }

  const handleSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log('Updated profile');
    navigate('/home');
  };

  return (
    <div>
      <Form onSubmit={handleSignup} className="signup-form">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter your name"
          required
        ></input>

        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter your email"
          required
        ></input>

        <label htmlFor="exampleInputEmail1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
          required
        ></input>
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept This Conditions</label>
                
        <button className="btn-control mx-auto btn btn-primary mt-" type="submit">
          SIGNUP
        </button>
      </Form>
      <div className="signup-google">
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-danger pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>{" "}
        </p>

        <Google></Google>
      </div>
    </div>
  );
};

export default Signup;
