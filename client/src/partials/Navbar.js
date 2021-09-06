import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-fixed lg:w-1/4 sm:w-full flex-shrink flex-grow-0 px-2 border-r-2'>
      <div className='sticky top-0 p-4 w-full h-full'>
        <ul className='flex sm:flex-col overflow-hidden content-center justify-center'>
          <li className='py-2'>
            <h2 className='logo sm:block'>
              Parallel<br/>Reader
            </h2>
          </li>
          <NavLink activeClassName="bg-highlight" to='/home'>
          <li className='py-2 hover:bg-highlight '>
              <span className='w-7 sm:mx-2 mx-4 inline'>⌂</span>
              <span className='hidden sm:inline'>Home</span>
          </li>
            </NavLink>
            <NavLink activeClassName="bg-highlight" to='/explore'>
          <li className='py-2 hover:bg-highlight '>
              <span className='w-7 sm:mx-2 mx-4 inline'>➾</span>
              <span className='hidden sm:inline'>Explore</span>
          </li>
            </NavLink>
          <NavLink activeClassName="bg-highlight" to='/community'>
          <li className='py-2 hover:bg-highlight '>
              <span className='w-7 sm:mx-2 mx-4 inline'>❁</span>
              <span className='hidden sm:inline'>Community</span>
          </li>
            </NavLink>
          <NavLink activeClassName="bg-highlight" to='/profile'>
          <li className='py-2 hover:bg-highlight '>
              <span className='w-7 sm:mx-2 mx-4 inline'>@</span>
              <span className='hidden sm:inline'>Profile</span>
          </li>
            </NavLink>
          <NavLink exact activeClassName="bg-highlight" to='/help'>
          <li className='py-2 hover:bg-highlight border-b-2'>
              <span className='w-7 sm:mx-2 mx-4 inline'>?</span>
              <span className='hidden sm:inline'>Help</span>
          </li>
            </NavLink>
        </ul>
        <div className="text-xs flex justify-between">
          <NavLink exact activeClassName="bg-highlight" to='/about'>
            About & Contact
          </NavLink>
          <a href="https://github.com/hy-js">&copy;hy-js</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
