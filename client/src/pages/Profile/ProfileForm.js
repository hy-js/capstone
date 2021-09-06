import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import useFetch from '../../components/Hooks/useFetch';
import DeleteProfileBtn from './DeleteProfileBtn';

// TODO: fix last acitve on
export default function ProfileForm() {
  const [nativeLanguage, setNative] = useState('en');
  const [targetLanguage, setTarget] = useState('');
  const [bio, setBio] = useState('');
  const history = useHistory();
  // fetch user
  const {
    data: user,
    loading,
    error
  } = useFetch('http://localhost:5000/auth/');
  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);
  if (!user) return null;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let me = {
    username: capitalizeFirstLetter(user.username),
    joined: user.createdOn.substring(0, 10),
  };
  // create profile
  async function profileCreate(e) {
    e.preventDefault();
    try {
      const profileData = {
        nativeLanguage,
        targetLanguage,
        bio
      };
      // make http request
      await axios.post('http://localhost:5000/profile', profileData);
      console.log(profileData)
      history.push('/home');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <section>
        <div className='mx-auto container flex justify-center h-screen '>
          <div className='grid grid-cols-2 gap-6 mx-auto m-16'>
            <div className='flex flex-wrap mx-2 overflow-hidden'>
              <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <form onSubmit={profileCreate}>
                  <p className='text-xs'> Joined:{me.joined}</p>
                  <h2 className='hero'>{me.username}</h2>
                  <label className='my-2'>
                    <p className='underline'>Native Language:</p>
                    <div className='inline-block mx-2'>
                      <select
                        className='border hover:border-gray-500 shadow leading-tight focus:outline-none focus:shadow-outline'
                        name='native'
                        onChange={(e) => setNative(e.target.value)}
                        value={nativeLanguage}>
                        <option value='en'>English 🇦🇺</option>
                        <option value='fr'>French 🇫🇷 </option>
                        <option value='de'>German 🇩🇪 </option>
                        <option value='es'>Spanish 🇪🇸 </option>
                        <option value='it'>Italian 🇮🇹 </option>
                        <option value='ru'>Russian 🇷🇺 </option>
                      </select>
                    </div>
                  </label>
                  <label className='my-2'>
                    <p className='underline'>Target Language/s:</p>
                    <div className='inline-block mx-2'>
                      <select
                        className='border hover:border-gray-500 shadow leading-tight focus:outline-none focus:shadow-outline'
                        name='target'
                        onChange={(e) => setTarget(e.target.value)}
                        value={targetLanguage}>
                        <option value='en'>English 🇦🇺</option>
                        <option value='fr'>French 🇫🇷 </option>
                        <option value='de'>German 🇩🇪 </option>
                        <option value='es'>Spanish 🇪🇸 </option>
                        <option value='it'>Italian 🇮🇹 </option>
                        <option value='ru'>Russian 🇷🇺 </option>
                      </select>
                    </div>
                  </label>
                  <hr />
                  <label>
                    <h2 className='hero'>Bio:</h2>
                    <textarea
                      className='border dark:text-black'
                      type='text'
                      name="bio"
                      onChange={(e) => setBio(e.target.value)}
                      value={bio}
                    />
                  </label>
                  <ul className='items-center my-5'>
                    <li>
                      <button
                        type='submit'
                        className='text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>
                        Save Profile
                      </button>
                    </li>
                    <li className="my-5">
                      <DeleteProfileBtn />
                    </li>
                  </ul>
                </form>
              </div>
              <div className='mt-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>Friends:</h2>
                <p>Welcome to the Community!</p>
                <ul className='items-center my-5'>
                  <li>
                    <Link
                      to='/community'
                      className='text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>
                      Say Hi
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='card dark:border-gray-400'>
              <h2 className='hero'>Card Collection:</h2>
              <p>Your Card Collection is about to begin...</p>
              <ul className='items-center my-5'>
                <li>
                  <Link
                    to='/explore'
                    className='text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>
                    Explore Content
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
