import React, { useEffect, useState } from 'react';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../Firebase.init';
import SocialSignIn from '../SocialSignIn';
import Spinner from '../Spinner';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, signInError] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetPasswordError] =
    useSendPasswordResetEmail(auth);

  const [signInUser, setSignInUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
    general: '',
  });

  // Getting email on blur
  const getEmailOnBlur = (event) => {
    const validTest = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const validMail = validTest.test(event.target.value);

    if (validMail) {
      setSignInUser({ ...signInUser, email: event.target.value });
      setError({ ...error, email: '' });
    } else {
      setError({ ...error, email: 'Invalid email address!' });
      setSignInUser({ ...signInUser, email: '' });
    }
  };

  // Getting Password on blur
  const getPasswordOnBlur = (event) => {
    setSignInUser({ ...signInUser, password: event.target.value });
  };

  // Sign in
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(signInUser.email, signInUser.password);
    toast.success('Logged In');
  };

  // Redirect
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  // Forget Password
  const forgetPassword = async () => {
    await sendPasswordResetEmail(signInUser.email);
    toast.success('Reset password mail sent!');
  };

  // Handling Error
  useEffect(() => {
    if (signInError) {
      console.log(signInError);
      switch (signInError?.code) {
        case 'auth/invalid-email':
          toast.error('Invalid email provided, please provide a valid email');
          break;
        case 'auth/invalid-password':
          toast.error('Wrong password!!');
          break;
        case 'auth/wrong-password':
          toast.error('Wrong Password!!');
          break;
        default:
          toast.warn('Something went wrong');
      }
    }
    if (resetPasswordError) {
      console.log(resetPasswordError);
      switch (resetPasswordError?.code) {
        case 'auth/missing-email':
          toast.error('Missing Email');
          break;
        default:
          toast.warn('Something went wrong');
      }
    }
  }, [signInError, resetPasswordError]);

  // console.log(user?.user);
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300">
      {loading || sending ? (
        <Spinner />
      ) : (
        <div className="px-8 py-6 mx-4 my-8 text-left bg-base-100 shadow-2xl w-full md:w-2/3 lg:w-1/3 sm:w-10/12">
          <div className="flex justify-center text-center text-2xl tracking-[.2rem]">
            theSyed Wild Photographer
          </div>
          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <div className="mt-4">
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  onBlur={getEmailOnBlur}
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 mt-2 border text-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  onBlur={getPasswordOnBlur}
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full px-4 py-2 mt-2 text-black border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <span className="text-xs text-red-400">
                {error.general ? error.general : ''}
              </span>
              <div className="flex">
                <button
                  type="submit"
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Login
                </button>
              </div>
              <div className="mt-6 text-grey-dark flex justify-between">
                <Link to={'/signup'} className="text-blue-600 hover:underline">
                  Create account!
                </Link>
                <label
                  onClick={forgetPassword}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Forget Password?
                </label>
              </div>
            </div>
          </form>
          <div className="divider">OR</div>
          <SocialSignIn />
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default Login;
