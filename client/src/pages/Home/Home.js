import React from 'react';
import { withRouter } from 'react-router';

import Navbar from '../../partials/Navbar';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import App from './App/App'

const Home = () => {
  return (
    <>
      <Header />
      <div className='w-full h-screen flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow'>
        <Navbar />
        <main role='main' className='w-full flex-grow pt-1 px-3'>
        <h1 className="logo">⌂Home</h1>
        <App />
        </main>
        <Sidebar />
      </div>
      {/* <div className='bottom-0'>
        <Footer />
      </div> */}
    </>
  );
};

export default withRouter(Home);
