import React from 'react';
import { withRouter } from 'react-router-dom';
import { Hero } from './Hero';

import Header from '../../partials/Header';
import Footer from '../../partials/Footer';

const Landing = () => {
  return (
    <>
      <Header />
      <div className='w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap'>
        <main role='main' className='w-full flex-grow pt-1 px-3'>
          <Hero />
        </main>
      </div>
      <div className='bottom-0'>
        <Footer />
      </div>
    </>
  );
};

export default withRouter(Landing);
