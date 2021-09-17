import React from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../../partials/Navbar';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import CardDetails from '../Explore/CardDetails';

const Card = () => {
  return (
    <>
      <Header />
      <div className='w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap flex-grow'>
        <Navbar />
        <main role='main' className='w-full flex-grow pt-1 px-3'>
        <h1 className="logo">➾Explore Card</h1>
          <CardDetails />
        </main>
        <Sidebar />
      </div>
    </>
  );
};

export default withRouter(Card);
