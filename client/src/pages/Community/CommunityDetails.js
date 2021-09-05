import React from 'react';
import useFetch from '../../components/Hooks/useFetch';
import { Link } from 'react-router-dom';

const CommunityDetails = () => {
  const { data, loading, error } = useFetch(
    'http://localhost:5000/profile/user/all'
  );

  if (loading) return <h1>...</h1>;
  if (error) console.log(error);
  if (!data) return null;

  function Profile(props) {

    return (
      <div className='card dark:border-gray-400'>
        <ul>
          <Link to={`/community/user/${props.id}`}>
            <li className='hero hover:bg-highlight'>{props.username}</li>
          </Link>
          <li>Learning: {props.target}</li>
          <li>{props.vocab}</li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className='mx-auto container flex justify-center h-screen '>
          <div className='grid grid-cols-2 gap-6 mx-auto m-16'>
            <div className='flex flex-wrap mx-2 overflow-hidden'>
              <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>Community Activity</h2>
              </div>
              <div className='mt-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>All Cards:</h2>
              </div>
            </div>
            <div className='card dark:border-gray-400'>
              <h2 className='hero'>Readers:</h2>
              <div>
                {data.map((user) => (
                  <Profile
                    id={user.user._id}
                    username={user.user.username}
                    target={user.targetLanguage}
                    vocab={user.vocab}
                    key={user.user._id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityDetails;
