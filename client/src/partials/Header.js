import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import SignOutBtn from '../pages/auth/SignOutBtn';
import Theme from './Theme';

const Header = () => {
  const { signedin } = useContext(AuthContext);

  return (
    <nav className='fixed right-0'>
      {signedin === false && (
        <ul className='flex flex-grow justify-end flex-wrap items-center p-2 mx-2'>
          <li>
            <Link
              to='/signup'
              className='mx-5 text-black underline bg-white flex items-center p-1'>
              Join
            </Link>
          </li>
          <li>
            <Link
              to='/signin'
              className='text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>
              Sign in
            </Link>
          </li>
        </ul>
      )}
      {signedin === true && (
        <ul className='flex flex-grow justify-end flex-wrap items-center'>
          <li>
            <div className='mx-5 text-black underline bg-white flex items-center p-1'>
              <SignOutBtn />
            </div>
          </li>
          <li>
            <Link
              to='/home'
              className='text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>
              Home
            </Link>
          </li>
        </ul>
      )}
      <Theme />
    </nav>
  );
};

export default Header;
