import React from 'react';
import How from './How';
import Demo from './Demo';
import video from '../../Timeline.mov';

import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import Navbar from '../../partials/Navbar';
import Sidebar from '../../partials/Sidebar';

const Help = () => {
  return (
    <>
      <Header />
      <div className='w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap '>
        <Navbar />
        <main role='main' className='w-full flex-grow pt-1 px-3 '>
          <h1 className='logo'>?Help</h1>
          <How />
          <div className='border-2 flex justify-items-center overflow-y-hidden'>
            <video
              className='video-container video-container-overlay '
              autoPlay='true'
              loop>
              <source src={video} type='video/mp4' />
            </video>
          </div>
        </main>
        <Sidebar />
      </div>
      <div className='bottom-0'>
        <Footer />
      </div>
    </>
  );
};

export default Help;
