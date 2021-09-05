import React from 'react';

const How = () => {
  return (
    <section
      id='how'
      className='w-full flex flex-col content-center justify-center'>
      <div className='mx-auto container'>
        <h2 className='hero'>How To</h2>
        <div className='grid grid-cols-2 gap-6 mx-auto'>
          <div className='flex flex-wrap -mx-2 overflow-hidden'>
            <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
              <p>1</p>
            </div>

            <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
              <p>2</p>
            </div>

            <div className='mt-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
              <p>3</p>
            </div>
          </div>
          <div className='card dark:border-gray-400'>
            <h2 className='hero'>Why?</h2>
            <p>1</p>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default How;
