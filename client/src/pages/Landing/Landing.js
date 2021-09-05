import React from 'react';
import { withRouter } from 'react-router-dom';
import { Hero } from './Hero';
import { How } from './How';
import Demo from './Demo';

import Header from '../../partials/Header';
import Footer from '../../partials/Footer';

const Landing = () => {
  return (
    <>
      <Header />
      <div class='w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap'>
        <main role='main' class='w-full flex-grow pt-1 px-3'>
          <Hero />
          <hr/>
          <How />
          <Demo />
        </main>
      </div>
      <div className='bottom-0'>
        <Footer />
      </div>
    </>
  );
};

export default withRouter(Landing);
