import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory, Link, withRouter } from "react-router-dom";
import AuthContext from '../../context/AuthContext';
import Header from "../../partials/Header";
import SignOutBtn from "./SignOutBtn";


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  // const [nativeLanguage, setNativeLanguage] = useState('');
  // const [targetLanguage, setTargetLanguage] = useState('');

  const { getsignedin } = useContext(AuthContext);
  const history = useHistory();
// TODO: fix language

  async function handleRegister(e) {
    // stop reloading page
    e.preventDefault();

    try {
      const registerData = {
        username,
        password,
        passwordConfirm,
      };
    // make http request
    await axios.post("http://localhost:5000/auth/", registerData, {
      withCredentials: true
    })
    await getsignedin();
    history.push("/profile/edit");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
    <Header />
    <div className='flex items-center justify-center h-screen'>
      <div className='text-black p-10 border border-black dark:text-white dark:border-white'>
      <Link to="/" className="underline hover:bg-highlight"><span>Back</span></Link>
        <h1 className='underline py-2 hero'>Join</h1>
        <form onSubmit={handleRegister}>
          <label>
            <p>Username</p>
            <input
              className='border dark:text-black'
              type='text'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              className='border dark:text-black'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <label>
            <p>Confirm Password</p>
            <input
              className='border dark:text-black'
              type='password'
              onChange={(e) => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
            />
          </label>
          {/* <label>
            <p>Native Language</p>
            <div className='inline-block'>
              <select onChange={(e) => setNativeLanguage(e.target.value)} value={nativeLanguage} className='border hover:border-gray-500 shadow leading-tight focus:outline-none focus:shadow-outline'>
              <option value="en">English 🇦🇺</option>
                <option value="fr">French 🇫🇷 </option>
                <option value="de">German 🇩🇪 </option>
                <option value="es">Spanish 🇪🇸 </option>
                <option value="it">Italian 🇮🇹 </option>
                <option value="jp">Japanese 🇯🇵 </option>
                <option value="kr">Korean 🇰🇷 </option>
              </select>
            </div>
          </label>
          <label>
            <p>Target Language</p>
            <div className='inline-block'>
              <select onChange={(e) => setTargetLanguage(e.target.value)} value={targetLanguage} className='border hover:border-gray-500 shadow leading-tight focus:outline-none focus:shadow-outline'>
                <option value="en">English 🇦🇺</option>
                <option value="fr">French 🇫🇷 </option>
                <option value="de">German 🇩🇪 </option>
                <option value="es">Spanish 🇪🇸 </option>
                <option value="it">Italian 🇮🇹 </option>
                <option value="jp">Japanese 🇯🇵 </option>
                <option value="kr">Korean 🇰🇷 </option>
              </select>
            </div>
          </label> */}
          <ul className='flex justify-center items-center my-5'>
                <li>
                  <button
                    type="submit"
                    className='mx-2 text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>
                    Sign up
                  </button>
                </li>
                <li>
                  <Link
                    to='/signin'
                    className='mx-2 text-black hover:bg-highlight underline bg-white flex items-center p-1'>
                    Sign in
                  </Link>
                </li>
              </ul>
        </form>
      </div>
    </div>
    </>
  );
};

export default withRouter(Signup);
