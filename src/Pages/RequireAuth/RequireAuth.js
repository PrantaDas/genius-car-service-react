import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
      return  <Spinner style={{height:"300px", width:"300px"}} animation="grow" variant="info"></Spinner>
    }
    if (!user) {
       return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default RequireAuth;