import React, { useState } from 'react';
import CardApp from '../../components/Cards/CardApp';
import { Link } from 'react-router-dom';

import sample from './sampleTexts.json';
import useSelect from '../../components/Hooks/useSelect';

const Demo = () => {
  const [language, setLanguage] = useState('en');

  let article = sample[language];
  let p = article.paragraphs;

  useSelect(p[0][1])


  return (
    <section
      id='demo'
      className='w-full flex flex-col content-center justify-center'>
      <div className='mx-auto container'>
        <h2 className='hero'>Demo</h2>
        <div className='grid grid-cols-2 gap-4 container mx-auto'>
          <div>
            <form>
              <label className='my-2'>
                <p className='inline-block underline'>Target Language:</p>
                <div className='inline-block mx-2'>
                  <select
                    className='border hover:border-gray-500 shadow leading-tight focus:outline-none focus:shadow-outline'
                    name='language'
                    onChange={(e) => setLanguage(e.target.value)}>
                    <option value='en'>English 🇦🇺</option>
                    <option value='fr'>French 🇫🇷 </option>
                    <option value='de'>German 🇩🇪 </option>
                    <option value='es'>Spanish 🇪🇸 </option>
                    <option value='it'>Italian 🇮🇹 </option>
                    <option value='ru'>Russian 🇷🇺 </option>
                  </select>
                </div>
              </label>
            </form>
            <div className='w-full flex-grow pt-1 px-3'>
              <div id='text'>
                <p>{p[0]}</p>
                <p>{p[1]}</p>
                <a href={article.source} className='text-xs mx-2 underline'>
                  Source
                </a>
              </div>
            </div>
          </div>
          <CardApp />
        </div>
        <div className='mt-2 mb-5 grid place-items-center px-2'>
          <Link to='/home'>
            <button className='mx-2 text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>Check it out!</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Demo;
