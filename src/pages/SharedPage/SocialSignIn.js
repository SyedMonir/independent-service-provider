import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinner from './Spinner';
const SocialSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    // console.log(error);
    return toast.error(error.message);
  }
  if (loading) {
    return <Spinner />;
  }
  const handleGoogle = () => {
    signInWithGoogle();
  };
  return (
    <>
      <button
        onClick={handleGoogle}
        className="text-black bg-white py-2 p-8 rounded-3xl mx-auto flex items-center"
      >
        <span className="mr-4">
          <FcGoogle size={'2rem'} />
        </span>{' '}
        Continue with google
      </button>
    </>
  );
};

export default SocialSignIn;
