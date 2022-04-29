import React from "react";
import { Spinner } from "react-bootstrap";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  if (loading) {
    return (
      <Spinner
        style={{ height: "300px", width: "300px" }}
        animation="grow"
        variant="info"
      ></Spinner>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  if (!user.emailVerified && user.providerData[0]?.providerId==='password') {
    return (
      <div>
        <p className="text-danger">Please Verify Your Email First !</p>
        <button
          onClick={async () => {
            await sendEmailVerification();
            alert("Sent email");
          }}
        >
          Verify email
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
