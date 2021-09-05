import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function DeleleProfileBtn() {
   const [confirm, setConfirm] = useState(false);
  const { getsignedin } = useContext(AuthContext);

  const history = useHistory();

  async function deleteProfile() {
    await axios.delete('http://localhost:5000/profile');
    await axios.get('http://localhost:5000/auth/signout');
    await getsignedin();
    history.push('/');
  }

  return (
    <>
    {confirm === false && (
      <button
        className='text-red-500 border border-black bg-black hover:text-black hover:bg-red-500 flex items-center p-1'
        onClick={() => {
          setConfirm(true);
        }}>
        Delete Profile
      </button>
    )}
      {confirm === true && (
         <>
         <button
        className='text-white border border-black bg-black hover:text-black hover:bg-white items-center p-1'
        onClick={() => {
          setConfirm(false);
        }}>
        Cancel
      </button>
      <div>
         <h2 className='hero '>Really?</h2>
         <p>Your account and profile will be gone<br/> and your cards uncredited </p>
      </div>
      <button
        className='text-red-500 border border-black bg-black hover:text-black hover:bg-red-500 items-center p-1'
        onClick={deleteProfile}>
        Confirm Delete Profile
      </button>
      </>
      )}
    </>
  );
}

export default DeleleProfileBtn;
