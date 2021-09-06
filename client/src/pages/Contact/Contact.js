import React from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../../partials/Navbar';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import ContactDetails from './ContactDetails';
import AboutDetails from './AboutDetails';

const Contact = () => {
  return (
    <>
      <Header />
      <div className='w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow'>
        <Navbar />
        <main role='main' className='w-full flex-grow pt-1 px-3'>
          <section>
            <div className='mx-auto container flex justify-center h-screen'>
              <div className='grid grid-flow-col grid-cols-2 gap-4 m-20 w-screen'>
                <AboutDetails />
                <ContactDetails />
              </div>
            </div>
          </section>
        </main>
        <Sidebar />
      </div>
    </>
  );
};

export default withRouter(Contact);
