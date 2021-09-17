import React, { useState } from 'react';
import useFetch from '../../components/Hooks/useFetch';
import { Link } from 'react-router-dom';

const CommunityDetails = () => {
  const [lang, setLang] = useState('');
  let link = 'http://localhost:5000/vocab/all'
  let { data: allCards } = useFetch(link);

  const { data, loading, error } = useFetch(
    'http://localhost:5000/profile/user/all'
  );

  if (allCards) {
    allCards.sort((a, b) => a.word.localeCompare(b.word));
  }

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

  function Vocab(props) {
    return (
      <div className='card dark:border-gray-400'>
        <ul>
          <Link to={`explore/card/${props.id}`}>
            <h3 className='card__title hover:bg-highlight'>{props.word}</h3>
          </Link>
        </ul>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className='mx-auto container flex justify-center'>
          <div className='grid grid-cols-2 gap-6 mx-auto m-16'>
            <div className='flex flex-wrap mx-2 overflow-hidden'>
              <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>Community Activity</h2>
              </div>
              <div className='mt-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>All Cards:</h2>
                <h2>Together we've learnt {allCards?.length} words!</h2>
                <form>
                  <label className='my-2'>
                    <p className='inline-block underline'>Target Language:</p>
                    <div className='inline-block mx-2'>
                      <select
                        className='border hover:border-gray-500 shadow leading-tight focus:outline-none focus:shadow-outline'
                        name='language'
                        onChange={(e) => {
                          setLang(e.target.value)
                          allCards.filter(l => l.language != lang)
                          console.log(allCards)
                          }
                        }
                      >
                        <option value='en'>English 🇦🇺</option>
                        <option value='fr'>French 🇫🇷 </option>
                        <option value='de'>German 🇩🇪 </option>
                        <option value='es'>Spanish 🇪🇸 </option>
                        <option value='it'>Italian 🇮🇹 </option>
                        <option value='ru'>Russian 🇷🇺 </option>
                      </select>
                    </div>
                  </label>
                </form>
                <div>
                  {allCards?.map((wordlist) => (
                    <Vocab
                      id={wordlist._id}
                      word={wordlist.word}
                      language={wordlist.language}
                      key={wordlist._id}
                    />
                  ))}
                </div>
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
