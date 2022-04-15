import React from 'react';
import { Button } from 'react-bootstrap';
import './SocialLogin.css'
import logo from '../../images/logo/google.svg'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logoFb from '../../images/logo/facebook.svg'
import logoGh from '../../images/logo/GitHub-Mark-120px-plus.png'
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    // const handleSignInWithGoogle = () => {
    //     signInWithGoogle()
    // }
    let errorElement;
    if (error || error1) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>


    }
    if (user || user1) {
        navigate('/');
    }
    return (
        <div>
            <div className='d-flex justify-content-md-around align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'>

                </div>
                <p className='mt-2 px-2 text-black-50'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'>

                </div>
            </div>
            <p className='text-primary fw-bold'>Sigin With</p>
            <div className='d-flex justify-content-around align-items-center my-2'>
                <div onClick={() => { signInWithGoogle() }} role="button">
                    <img className='px-2' src={logo} alt="" />
                </div>
                
                <div role="button">
                    <img style={{ width: '80px' }} className='px-2 ' src={logoFb} alt="" />
                </div>
                <div onClick={() => {signInWithGithub()}} role="button">
                    <img style={{ width: '45px' }} className='px-2' src={logoGh} alt="" />
                </div>
            </div>
            {errorElement}
        </div>
    );
};

export default SocialLogin;