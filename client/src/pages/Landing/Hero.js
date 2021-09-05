import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../hero.png';
import AuthContext from '../../context/AuthContext';


export const Hero = () => {
  const { signedin } = useContext(AuthContext);

  return (
    <section className='w-full flex flex-col h-screen items-center z-30'>
      <div className='w-full m-auto'>
        <div className='hover:bg-highlight'>
        {signedin === true && (
          <Link to='/home'>
            <img src={logo} alt='Logo' />
          </Link>
        )}
        {signedin === false && (
          <Link to='/help'>
            <img src={logo} alt='Logo' />
          </Link>
        )}
        </div>
        <div className='flex justify-center animate-bounce w-full'>
          <Link to='/help'>Learn More▿</Link>
        </div>
      </div>
      <hr />
    </section>
  );
};
