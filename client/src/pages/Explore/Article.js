import React from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../../partials/Navbar';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import ArticleDetails from '../Explore/ArticleDetails';

const Card = () => {
  return (
    <>
      <Header />
      <div className='w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap flex-grow'>
        <Navbar />
        <main role='main' className='w-full flex-grow pt-1 px-3'>
        <h1 className="logo">➾Explore Article</h1>
          <ArticleDetails />
        </main>
        <Sidebar />
      </div>
    </>
  );
};

export default withRouter(Card);
