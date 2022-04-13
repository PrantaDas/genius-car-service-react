import React, { useRef } from 'react';
import './Login.css'

import GoogleLogo from "../../images/logo/google.svg"
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');

    const navigate=useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit=(event)=>{
        event.preventDefault();
        const emailInput=emailRef.current.value;
        const passInput=passwordRef.current.value;
        signInWithEmailAndPassword(emailInput,passInput);
        navigate('/');
        console.log(emailInput,passInput);
    }

    return (
        <div className='container w-50 mx-auto mt-5 shadow-lg p-5 rounded-3 border'>
            <h2 className='text-primary fw-bold form-title'>Please Login!!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='alter-options'><small>New to Car Doctor?</small><Link className='text-decoration-none ps-1' to='/signup'>Register Here</Link></p>
        </div>

    );
};

export default Login;