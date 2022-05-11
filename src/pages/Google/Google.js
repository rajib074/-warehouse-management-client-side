import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";
import "./Google.css";
import { FcGoogle } from "react-icons/fc";

const Google = () => {
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  let errorElement;

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <button className="btn-control" onClick={() => signInWithGoogle()}>
        <FcGoogle /> GOOGLE
      </button>
    </div>
  );
};

export default Google;
