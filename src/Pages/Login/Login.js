import React, { useRef } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();

  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailInput = emailRef.current.value;
    const passInput = passwordRef.current.value;
    await signInWithEmailAndPassword(emailInput, passInput);


    const { data } = await axios.post('http://localhost:5000/login', { emailInput });
    console.log(data);
    localStorage.setItem('accessToken', data.accessToken);
    // navigate('/');
    navigate(from, { replace: true });
    console.log(emailInput, passInput);
  };
  const resetPassword = async () => {
    const emailInput = emailRef.current.value;
    await sendPasswordResetEmail(emailInput);
    alert("Sent email");
  };

  return (
    <div className="container w-50 mx-auto mt-5 shadow-lg p-5 rounded-3 border">
      <h2 className="text-primary fw-bold form-title">Please Login!!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className=""
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className=""
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="alter-options">
        <small>New to Car Doctor?</small>
        <Link className="text-decoration-none ps-1" to="/signup">
          Register Here.
        </Link>
      </p>
      <p className="alter-options">
        <small>Forget Password?</small>
        <span
          className="text-primary px-1"
          role="button"
          onClick={resetPassword}
        >
          Reset password.
        </span>
      </p>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
