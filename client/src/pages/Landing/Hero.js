import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../hero.png';

export const Hero = () => {
  return (
    <section className='w-full flex flex-col h-screen items-center z-30'>
      <div className='w-full m-auto'>
        <div className='hover:bg-highlight'>
          <Link to="/home"><img src={logo} alt='Logo' /></Link>
        </div>
        <div className='flex justify-center animate-bounce w-full'>
          <Link to='#how'>Learn More▿</Link>
        </div>
      </div>
      <hr />
    </section>
  );
};
