import React, { useContext, useState } from 'react';
import ParagraphContextEdit from './ParagraphContextEdit';
import Card from './Card';
import { ArticleContext } from './App';

export default function ArticleEdit({ article, vocab }) {
  const { handleArticleSelect, handleVocabSelect } = useContext(ArticleContext);

  return (
    <>
      <div>
        <button onClick={() => handleArticleSelect(undefined)}>&#x2716;</button>
      </div>
      <div>
        <p className='card__label'>
          From Article:{' '}
          <a href={article.source} rel='noopener noreferrer' target='_blank'>
            {article.name}
          </a>
        </p>
        <p className='card__label'>
          Language: <em>{article.language}</em>
        </p>
      </div>
      <div className='vocab-list'>
        {vocab.map((word, i) => (
          <Card
          word={vocab[i]}
          language={article.language}
          />
        ))}
      </div>
    </>
  );
}
