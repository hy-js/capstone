import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory, Link, withRouter } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import Header from '../../partials/Header';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { getsignedin } = useContext(AuthContext);
  const history = useHistory();

  async function signin(e) {
    // stop reloading page
    e.preventDefault();

    try {
      const signinData = {
        username,
        password
      };
      // make http request
      await axios.post('http://localhost:5000/auth/signin', signinData, {
        withCredentials: true
      });
      await getsignedin();
      history.push('/profile');
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <Header />
      <div className='flex items-center justify-center h-screen'>
        <div className='text-black p-10 border border-black dark:text-white dark:border-white'>
          <Link to='/' className='underline hover:bg-highlight'>
            <span>Back</span>
          </Link>
          <h1 className='underline py-2 hero'>Sign In</h1>
          <form onSubmit={signin}>
            <label>
              <p>Username</p>
              <input
                autoComplete='username'
                className='border dark:text-black'
                type='text'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                autoComplete='password'
                className='border dark:text-black'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
            <ul className='flex justify-center items-center my-5'>
              <li>
                <button
                  type='submit'
                  className='mx-2 text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>
                  Sign in
                </button>
              </li>
              <li>
                <Link
                  to='/signup'
                  className='mx-2 text-black hover:bg-highlight underline bg-white flex items-center p-1'>
                  Sign up
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(Signin);
