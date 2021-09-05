import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Vocab from '../components/Vocab/Vocab';
import Header from './Header';
import useFetch from '../components/Hooks/useFetch';
import AuthContext from '../context/AuthContext';

export default function Sidebar() {
  const { signedin } = useContext(AuthContext);

  const { data: profile, loading, error } = useFetch('http://localhost:5000/profile/');

  if(error) console.log(error)
  if (!profile) return <h1>Sidebar</h1>

  const me = <Link to='/profile/'>{profile.user.username}</Link>;
  const vocab = profile.vocab;
  const cards = vocab.filter((x) => x.cards);
  const count = cards.length;

  return (
    <>
      <div className='w-fixed w-1/4 flex-shrink flex-grow-0 px-42 border-l-2 py-6'>
        <div className='flex md:flex-col px-2'>
          <div className='border-b-2 mb-3 w-full'>
                <h2>Community Activity</h2>
                <p >TODO:</p>
                <h2>Your Vocablist</h2>
                <p >You know {count} words</p>
          </div>
        </div>
      </div>
    </>
  );
}
