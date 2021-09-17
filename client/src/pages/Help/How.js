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
              <p>1. Sign up for an account and create your profile</p>
            </div>

            <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
              <p>2. On the homepage, select your target language and get reading. Click any words you would like to commit to memory or click to see words other readers have already committed.</p>
            </div>

            <div className='mt-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
              <p>3. Click the button to create a flash card from your words, add your proposed translation and the context you read the word in.</p>
            </div>
          </div>
          <div className='card dark:border-gray-400'>
            <h2 className='hero'>Why?</h2>
            <p>Learning new languages is difficult. It can take months before you actually start reading in your target language. Parallel reader encourages you to jump in the deep end - but with the constant support of fellow learners. Identify cognates or do your own research to translate a word, view it in real language context, learn something new and commit it to memory.  Your work then helps others crowd source translations and their context in parallel. As a community you will slowly highlight and translate entire articles. </p>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default How;
