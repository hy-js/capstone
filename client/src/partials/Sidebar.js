import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../components/Hooks/useFetch';
export default function Sidebar() {
  // const { data: profile, error } = useFetch('http://localhost:5000/profile/');
  const { data, error } = useFetch('http://localhost:5000/vocab/');

  if (error) console.log(error);
  if (!data) return <h1>Sidebar</h1>;

  // const me = <Link to='/profile/'>{profile.user.username}</Link>;
  // const vocab = profile.vocab;
  // const cards = vocab.filter((x) => x.cards);
  // const count = cards.length;

  return (
    <>
      <div className='w-fixed w-1/4 flex-shrink flex-grow-0 px-42 border-l-2 py-6'>
        <div className='flex md:flex-col px-2'>
          <div className='mb-3 w-full'>
            <h2 className='hero border-b-2'>Your <br/>Vocablist</h2>
            <ul>
              {data.map((wordlist) => (
                <li>{wordlist.word}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
