import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../components/Hooks/useFetch';

import Paragraph from './Paragraph'

function CardDetails() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    'http://localhost:5000/article/' + id
  );

  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);
  if (!data) return null;

  return (
    <div className='article mx-2 border-b-2'>
      <div className='article__header'>
        <div>
          <a href={data?.source} rel='noopener noreferrer' target='_blank'>
            <h3 className='article__title hero underline'>{data?.name}</h3>
          </a>
          <span className='article__language'>
            <em>{data?.language}</em>
          </span>
        </div>
        <div className='grid article__row'>
          <div id='article' className='article__paragraphs'>
            {data.paragraphs.map((paragraph) => {
              return (
                <>
                  <Paragraph key={paragraph._id} {...paragraph} />
                  <br />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
