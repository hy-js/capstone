import React from 'react';

const CommunityDetails = () => {

  return (
    <>
      <section>
        <div className='mx-auto container flex justify-center h-screen '>
          <div className='grid grid-cols-2 gap-6 mx-auto m-16'>
            <div className='flex flex-wrap mx-2 overflow-hidden'>
              <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>Community</h2>
              </div>

              <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>Bio:</h2>
              </div>

              <div className='mt-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>Community:</h2>
              </div>
            </div>
            <div className='card dark:border-gray-400'>
              <h2 className='hero'>Card Collection:</h2>
              <p>1</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CommunityDetails;
