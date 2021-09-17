import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../../components/Hooks/useFetch';
import ProfileForm from '../Profile/ProfileForm';
import axios from 'axios';

export default function ProfileDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [following, setFollowing] = useState(id);

  const { data, loading, error } = useFetch(
    'http://localhost:5000/profile/user/' + id
  );

  const { data: vocabList } = useFetch(
    'http://localhost:5000/vocab/user/' + id
  );
  if (vocabList) vocabList.sort((a, b) => a.word.localeCompare(b.word));

  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);
  if (!data || !vocabList) return <ProfileForm />;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let me = {
    username: capitalizeFirstLetter(data.user.username),
    joined: data.user.createdOn.substring(0, 10),
    active: data.lastUpdated.substring(0, 10),
    nativeLanguage: data.nativeLanguage,
    targetLanguage: data.targetLanguage,
    bio: data.bio
    // vocab: profile.vocab,
  };

  // create profile
  async function profileCreate(e) {
    e.preventDefault();
    try {
      const profileData = {
        following
      };
      // make http request
      console.log(profileData);
      await axios.post('http://localhost:5000/profile', profileData);
      history.push('/community');
    } catch (err) {
      console.error(err);
    }
  }

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
                <p>Native Language: {me.nativeLanguage}</p>
                <p>Target Language: {me.targetLanguage}</p>
                <hr />
                <h2 className='hero'>Bio:</h2>
                <p>{me.bio}</p>
                <p>{me.vocab}</p>
                <form onSubmit={profileCreate}>
                  <input
                    type='text'
                    name='following'
                    onChange={(e) => setFollowing(e.target.value)}
                    value={following}
                    className='hidden'
                  />
                  <ul className='items-center my-5'>
                    <li>
                      <button
                        type='submit'
                        className='text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>
                        Follow
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div className='card dark:border-gray-400'>
              <h2 className='hero'>Card Collection:</h2>
              <h2 className='underline'>
                Contributed {vocabList?.length} words
              </h2>
              <ul>
                {vocabList?.map((wordlist) => (
                  <a href={'/explore/card/' + wordlist._id}>
                    <li>{wordlist.word}</li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
