import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-black mt-auto'>
      <div className='p-2 text-white mx-auto'>
        <div className='flex justify-center flex-col text-center text-xs py-2'>
          <Link to={"/about"}>About & Contact</Link>
          <a href='https://github.com/' className="pt-2">&copy;2021 hy-js.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
