import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../../components/Hooks/useFetch';
import axios from 'axios';
import $ from 'jquery';

function CardDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [translation, setTranslation] = useState('');
  const [word, setWord] = useState('');

  const { data, loading, error } = useFetch(
    'http://localhost:5000/vocab/word/' + id
  );

  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);
  if (!data) return null;

  function cardEdit() {
    $('.editBox').removeClass('hidden');
  }

  async function wordCreate(e) {
    e.preventDefault();
    try {
      const vocabData = {
        translation
      };
      console.log(vocabData)
      await axios.post('http://localhost:5000/vocab/' + id, vocabData);
      history.push('/explore/card/' + id);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='card dark:border-gray-400'>
      <div>
        <a
          href={'/community/user/' + data?.user}
          className='card__label text-sm underline'>
          reader source
        </a>
        <p className='card__label'>{data?.language}</p>
      </div>
      <div className='card__header'>
        <h3 className='card__title'>{data?.word}</h3>
        <div>
          <button
            onClick={cardEdit}
            className='text-white border border-black bg-black hover:text-black hover:bg-white p-1 mx-2'>
            Edit
          </button>
        </div>
      </div>
      <div className='card__row'>
        <span className='card__label'>Translation:</span>
        <span className='card__value'>{data?.translation}</span>
        <div className='editBox hidden'>
          <form onSubmit={wordCreate}>
            <textarea
              name='translation'
              onChange={(e) => setTranslation(e.target.value)}
              value={translation}
              className='border dark:text-black'
              type='text'
            />
            <button
              type='submit'
              onClick={(e) => {
                e.target.classList.add('hidden');
              }}
              className='text-white border border-black bg-black hover:text-black hover:bg-white p-1 mx-2'>
              Edit Translation
            </button>
          </form>
        </div>
      </div>
      <div className='card__row'>
        <span className='card__label'>Context:</span>
        <span className='card__value'>{data?.context}</span>
      </div>
    </div>
  );
}

export default CardDetails;
