import React, { useContext } from 'react';
import { CardContext } from './CardApp';

export default function Card(props) {
  const { handleCardSelect, handleCardDelete } = useContext(CardContext);
  const { id, word, language, notes } = props;
  return (
    <div className='card dark:border-gray-400'>
      <span className='card__label'>{language}</span>
      <div className='card__header'>
        <h3 className='card__title'>{word}</h3>
        <div>
          <button
            className='btn btn--danger dark:color-gray-400'
            onClick={() => handleCardDelete(id)}>
            Delete
          </button>
      </div>
      </div>
      <div className='card__row'>
        <span className='card__label'>Notes:</span>
        <span className='card__value'>{notes}</span>
      </div>
    </div>
  );
}
