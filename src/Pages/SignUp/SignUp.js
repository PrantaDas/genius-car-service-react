import React, { useRef, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './SignUp.css'
import GoogleLogo from "../../images/logo/google.svg"
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';


const SignUp = () => {
    const [agree, setAgree] = useState(false);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleSubmit =async(event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // const agree = event.target.terms.checked;
        console.log(email, password);

       await createUserWithEmailAndPassword(email, password);
        navigate('/');
        // await updateProfile({ displayName });
          alert('Updated profile');



        // console.log(user?.displayName);
    }
    if (user) {
        console.log(user);
    }

    return (
        <div className='container w-50 mx-auto mt-5 shadow-lg p-5 rounded-3 border'>
            <h2 className='text-primary fw-bold form-title'>Please Register!!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} className='me-2' type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms"><small>Accept Our Terms & Conditions. <span className='text-danger fw-bolder' role="button">Read the T&C</span></small></label>
                <br />
                <Button className={agree ? 'active' : 'disabled'} variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p className='alter-options'><small>Already Have an Account?</small><Link className='text-decoration-none ps-1' to='/login'>Login Here</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;