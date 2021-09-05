import React from 'react';
import Header from '../partials/Header';
import { useHistory } from 'react-router-dom';

const Unauthorised = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <Header />
      <div className='flex items-center justify-center h-screen'>
        <div className='text-black p-10 border border-black'>
          <h1 className='underline py-2 hero'>Nothing Here..</h1>
          <div className='mt-2 mb-5 grid place-items-center px-2 underline'>
            <button className='btn--primary btn' onClick={goBack}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unauthorised;
