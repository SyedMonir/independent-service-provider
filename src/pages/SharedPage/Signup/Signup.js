import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import Spinner from '../Spinner';
import { toast, ToastContainer } from 'react-toastify';
import SocialSignIn from '../SocialSignIn';

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, createUserError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateUserError] = useUpdateProfile(auth);

  const [createUser, setCreateUser] = useState({
    displayName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    general: '',
  });

  // Getting name on blur
  const getNameBlur = (event) => {
    setCreateUser({ ...createUser, displayName: event.target.value });
  };

  // Getting email on blur
  const getEmailOnBlur = (event) => {
    const validTest = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const validMail = validTest.test(event.target.value);

    if (validMail) {
      setCreateUser({ ...createUser, email: event.target.value });
      setError({ ...error, email: '' });
    } else {
      setError({ ...error, email: 'Invalid email address!' });
      setCreateUser({ ...createUser, email: '' });
    }
  };

  // Getting password on blur
  const getPasswordOnBlur = (event) => {
    const validTest = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const validPassword = validTest.test(event.target.value);
    if (validPassword) {
      setCreateUser({ ...createUser, password: event.target.value });
      setError({ ...error, password: '' });
    } else {
      setError({
        ...error,
        password: 'Please enter at least a number and a special character!',
      });
      setCreateUser({ ...createUser, password: '' });
    }
  };

  //   Creating user
  const handleSignup = async (event) => {
    event.preventDefault();
    const confirmPassword = event.target.confirmPassword.value;
    if (confirmPassword === createUser.password) {
      await createUserWithEmailAndPassword(
        createUser.email,
        createUser.password
      );
      setError({ ...error, general: '' });
    } else {
      setError({ ...error, general: 'Password must be same!' });
    }

    // Updated Profile Name
    await updateProfile({ displayName: createUser.displayName });
    if (updateUserError) {
      setError({ ...error, name: 'Enter your name' });
      return;
    }
    toast.success('Created User!');
  };

  // Redirect
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || '/login';
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  useEffect(() => {
    // console.log(createUserError);
    if (createUserError) {
      switch (createUserError?.code) {
        case 'auth/invalid-email':
          toast.error('Invalid email provided, please provide a valid email');
          break;
        case 'auth/invalid-password':
          toast.error('Wrong password!!');
          break;
        case 'auth/email-already-in-use':
          toast.error('Email already is use!!');
          break;
        default:
          toast.warn('Something went wrong');
      }
    }
  }, [createUserError]);

  // console.log(user?.user?.emailVerified);
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-base-300">
        {loading || updating ? (
          <Spinner />
        ) : (
          <div className="px-8 py-6 mx-4 my-8 text-left bg-base-100 shadow-2xl w-full md:w-2/3 lg:w-1/3 sm:w-10/12">
            <div className="flex justify-center text-center text-2xl tracking-[.2rem]">
              theSyed Wild Photographer
            </div>
            <h3 className="text-2xl font-bold text-center">Join us</h3>
            <form onSubmit={handleSignup}>
              <div className="mt-4">
                <div>
                  <label className="block" htmlFor="Name">
                    Name
                  </label>
                  <input
                    onBlur={getNameBlur}
                    type="text"
                    placeholder="Name"
                    id="Name"
                    className="w-full px-4 py-2 mt-2 text-black border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
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
                <div className="mt-4">
                  <label className="block">Confirm Password </label>
                  <input
                    type="password"
                    id="confirmPassword"
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
                    Create Account
                  </button>
                </div>
                <div className="mt-6 text-grey-dark">
                  Already have an account?{' '}
                  <Link to={'/login'} className="text-blue-600 hover:underline">
                    Log in
                  </Link>
                </div>
              </div>
            </form>
            <div className="divider">OR</div>
            <SocialSignIn />
            <ToastContainer />
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;
