import React from 'react';
import How from "./How"
import Demo from './Demo';

import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import Navbar from '../../partials/Navbar';
import Sidebar from '../../partials/Sidebar';

const Help = () => {
  return (
    <>
      <Header />
      <div class='w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap'>
      <Navbar />
        <main role='main' class='w-full flex-grow pt-1 px-3'>
          <How />
          <Demo />
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
