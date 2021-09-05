import React from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../../partials/Navbar';
import Sidebar from '../../partials/Sidebar';
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';

import CommunityDetails from '../Community/CommunityDetails';

const Community= () => {
  return (
    <>
      <Header />
      <div class='w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap flex-grow'>
        <Navbar />
        <main role='main' class='w-full flex-grow pt-1 px-3'>
          <CommunityDetails />
        </main>
        <Sidebar />
      </div>
      {/* <div className='bottom-0'>
        <Footer />
      </div> */}
    </>
  );
};

export default withRouter(Community);
