import React, { useState } from 'react';
import useFetch from '../../components/Hooks/useFetch';
import NewArticle from './NewArticle';

const ExploreDetails = () => {
  const [searchVocabTerm, setVocabSearchTerm] = useState('');
  const [searchReadersTerm, setReadersSearchTerm] = useState('');
  const [searchArticleTerm, setArticleSearchTerm] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: vocab,
    loading,
    error
  } = useFetch('http://localhost:5000/vocab/all/');
  const { data: readers } = useFetch('http://localhost:5000/profile/user/all');
  const { data: articles } = useFetch('http://localhost:5000/article/all');

  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);
  if (!vocab && !readers && !articles) return null;

  return (
    <>
      <section>
        <div className='mx-auto container flex justify-center '>
          <div className='grid grid-cols-2 gap-6 mx-auto m-16'>
            <div className='flex flex-wrap mx-2 overflow-hidden'>
              <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>Articles:</h2>
                <input
                  type='text'
                  placeholder='Search...'
                  className='flex my-3 border dark:text-black'
                  onChange={(e) => {
                    setArticleSearchTerm(e.target.value);
                  }}
                />
                {articles
                  ?.filter((val) => {
                    if (searchArticleTerm === '') {
                      return null;
                    } else if (
                      val.name
                        .toLowerCase()
                        .includes(searchArticleTerm.toLowerCase()) ||
                      val.language
                        .toLowerCase() === (searchVocabTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val, key) => {
                    return (
                      <div className='card dark:border-gray-400'>
                        <a href={'/explore/article/' + val._id}>
                          <h3 className='card__title hover:bg-highlight'>
                            {val.name}
                          </h3>
                        </a>
                      </div>
                    );
                  })}
              </div>

              <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>Cards:</h2>
                <input
                  type='text'
                  placeholder='Search...'
                  className='flex my-3 border dark:text-black'
                  onChange={(e) => {
                    setVocabSearchTerm(e.target.value);
                  }}
                />
                {vocab
                  ?.filter((val) => {
                    if (searchVocabTerm === '') {
                      return null;
                    } else if (
                      val.word
                        .toLowerCase()
                        .includes(searchVocabTerm.toLowerCase()) ||
                      val.language
                        .toLowerCase() === (searchVocabTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val, key) => {
                    return (
                      <div className='card dark:border-gray-400'>
                        <a href={'/explore/card/' + val._id}>
                          <h3 className='card__title hover:bg-highlight'>
                            {val.word}
                          </h3>
                          <p>
                            <em>{val.language}</em>
                          </p>
                          <p>translation: {val.translation}</p>
                        </a>
                      </div>
                    );
                  })}
              </div>

              <div className='mt-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
                <h2 className='hero'>Readers:</h2>
                <input
                  type='text'
                  placeholder='Search...'
                  className='flex my-3 border dark:text-black'
                  onChange={(e) => {
                    setReadersSearchTerm(e.target.value);
                  }}
                />
                {readers
                  ?.filter((val) => {
                    if (searchReadersTerm == '') {
                      return null;
                    } else if (
                      val.user.username
                        .toLowerCase()
                        .includes(searchReadersTerm.toLowerCase())
                      ) {
                      return val;
                    }
                  })
                  .map((val, key) => {
                    return (
                      <div className='card dark:border-gray-400'>
                        <a href={'/community/user/' + val.user._id}>
                          <h2 className='hero hover:bg-highlight'>
                            {val.user.username}
                          </h2>
                          <p>{val.targetLanguage}</p>
                          <p>{val.bio}</p>
                        </a>
                      </div>
                    );
                  })}
              </div>
            </div>
            <NewArticle />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreDetails;
