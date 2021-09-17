import React, { useContext, useState } from 'react';
import ParagraphContextEdit from './ParagraphContextEdit';
import {Link} from 'react-router-dom'
import Card from './Card';
import { ArticleContext } from './App';

export default function NewVocabEdit({ article, vocab }) {
  const { handleArticleSelect, handleVocabSelect } = useContext(ArticleContext);

  return (
    <>
      <div>
        <button onClick={() => handleArticleSelect(undefined)}>&#x2716;</button>
      </div>
      <div>
        <p className='card__label'>
          From Article:
          <a href={article.source} rel='noopener noreferrer' target='_blank'>
            {article.name}
          </a>
        </p>
        <p className='card__label'>
          Language: <em>{article.language}</em>
        </p>
      </div>
      <div className='vocab-list'>
        {vocab?.map((word, i) => (
          <Card word={vocab[i]} language={article.language} key={vocab.id} />
        ))}
      </div>
      <Link
        to='/profile'
        className='mx-2 text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>
        View your new words
      </Link>
    </>
  );
}
