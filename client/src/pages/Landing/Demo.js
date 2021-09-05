import React, { useContext } from 'react';
import CardApp from '../../components/Cards/CardApp';
import DemoArticle from './DemoArticle';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Demo = () => {
  const { signedin } = useContext(AuthContext);

  return (
    <section id='demo' className='w-full flex flex-col content-center justify-center'>
      <div className='mx-auto container'>
      <h2 className='hero'>Demo</h2>
        <div className='grid grid-cols-2 gap-4 container mx-auto'>
          <div>
            <form>
              <label className='my-2'>
                <p className='inline-block underline'>Target Language:</p>
                <div className='inline-block mx-2'>
                  <select className='border hover:border-gray-500 shadow leading-tight focus:outline-none focus:shadow-outline'>
                    <option>English 🇦🇺</option>
                    <option>French 🇫🇷 </option>
                    <option>German 🇩🇪 </option>
                    <option>Spanish 🇪🇸 </option>
                    <option>Italian 🇮🇹 </option>
                    <option>Japanese 🇯🇵 </option>
                    <option>Korean 🇰🇷 </option>
                  </select>
                </div>
              </label>
            </form>
            <DemoArticle />
          </div>
          <CardApp />
        </div>
        {signedin === false && (
          <div className='mt-2 mb-5 grid place-items-center px-2'>
            <Link
              to='/signin'>
              <button className='btn--primary btn'>Join to continue reading!</button>
            </Link>
          </div>
        )}
        {signedin === true && (
          <div className='mt-2 mb-5 grid place-items-center px-2'>
            <Link
              to='/home'>
              <button className='btn--primary btn'>Check it out!</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
