import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../Firebase.init';
import './Header.css';
import { HiMenuAlt1 } from 'react-icons/hi';
import Spinner from '../Spinner';
import { toast, ToastContainer } from 'react-toastify';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  // console.log(user);

  const logout = () => {
    signOut(auth);
    toast.success('Sign out Successfully!');
  };
  if (error) {
    toast.error(error);
    console.log(error);
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="navbar bg-black text-white px-5 py-0 min-h-12 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <HiMenuAlt1 className="h-5 w-5" />
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/services'}>Services</NavLink>
                </li>
                {user?.uid ? (
                  <li
                    onClick={logout}
                    className="text-lg font-medium rounded my-auto cursor-pointer hover:bg-[#111213] py-2 px-4"
                  >
                    Logout
                  </li>
                ) : (
                  <>
                    <li>
                      <NavLink to={'/signup'}>Signup</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/login'}>Login</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <Link
              to={'/'}
              className="btn btn-ghost normal-case brand tracking-[.2rem]"
            >
              theSyed
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/services'}>Services</NavLink>
              </li>

              {user?.uid ? (
                <li
                  onClick={logout}
                  className="text-lg font-medium rounded my-auto cursor-pointer hover:bg-[#111213] py-2 px-4"
                >
                  Logout
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to={'/signup'}>Signup</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/login'}>Login</NavLink>
                  </li>
                </>
              )}

              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 border-2 rounded-full pt-1 text-xl">
                      {user?.email.slice(0, 1)}
                    </div>
                  </label>
                  <ul
                    tabIndex="0"
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-44"
                  >
                    <li onClick={logout} className="cursor-pointer mx-auto">
                      <Link to={'/'} className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ''
              )}
            </ul>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default Header;
