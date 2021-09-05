import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import useFetch from '../../components/Hooks/useFetch';

export default function ProfileDetails() {
  const { data: profile, loading, error } = useFetch('http://localhost:5000/profile/me');

  if(loading) return <h1>LOADING...</h1>
  if(error) console.log(error)
  if (!profile) return null;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let me = {
    username: capitalizeFirstLetter(profile.user.username),
    joined: profile.user.createdAt.substring(0, 10),
    active: profile.lastActive.substring(0, 10),
    nativeLanguage: profile.nativeLanguage,
    targetLanguage: profile.targetLanguage,
    favTopics: profile.favTopics,
    bio: profile.bio
    // vocab: profile.vocab,
  };

  return (
    <>
      <section>
        <div className='mx-auto container flex justify-center h-screen '>
          <div className='grid grid-cols-2 gap-6 mx-auto m-16'>
            <div className='flex flex-wrap mx-2 overflow-hidden'>
              <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <p className='text-xs'> Joined:{me.joined}</p>
                <p className='text-xs'> Last active:{me.active}</p>
                <h2 className='hero '>{me.username}</h2>
                <p>Mother tongue: {me.nativeLanguage}</p>
                <p>Learning {me.targetLanguage}</p>
                <p>Interests: {me.favTopics}</p>

                {/* <p>{me.vocab}</p> */}
              </div>

              <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>Bio:</h2>
                <p>{me.bio}</p>
              </div>

              <div className='mt-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>Community:</h2>
              </div>
            </div>
            <div className='card dark:border-gray-400'>
              <h2 className='hero'>Card Collection:</h2>
              <p>1</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
