import React from 'react';

export default function ContactDetails() {
  return (
    <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
      <h2 className='hero'>Contact</h2>
      <div className='h-max text-black p-10 border border-black dark:text-white dark:border-white'>
        <h2 className='hero'>Form</h2>
        <form>
          <label>
            <p>Username</p>
            <input
              autoComplete='username'
              className='border dark:text-black'
              type='text'
            />
          </label>
          <label>
            <p>Reply Email</p>
            <input className='border dark:text-black' type='text' />
          </label>
          <label>
            <p>Subject</p>
            <input className='border dark:text-black' type='text' />
          </label>
          <label>
            <p>Message</p>
            <textarea className='border dark:text-black' type='text' />
          </label>
          <ul className='items-center my-5'>
            <li>
              <button
                type='submit'
                className='text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>
                Send Message
              </button>
            </li>
          </ul>
        </form>
      </div>
      <div className='flex flex-col'>
        <a href='https://github.com/hy-js'>My Profile</a>
        <a href='https://github.com/hy-js'>Ko Fi</a>
        <a href='https://github.com/hy-js'>Github</a>
        <a href='https://github.com/hy-js'>Twitter</a>
        <a href='https://github.com/hy-js'>Website</a>
        <a href='https://github.com/hy-js'>Linked In</a>F
      </div>
    </div>
  );
}
