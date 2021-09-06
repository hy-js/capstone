import React from 'react';

function NewCard() {
  return (
    <div className='card dark:border-gray-400'>
      <span className='card__label'>de</span>
      <div className='card__header'>
        <h3 className='card__title'>der</h3>
        <div>
          <button className='text-white border border-black bg-black hover:text-black hover:bg-white p-1 mx-2'>
            Add ➤
          </button>
          <button className='text-red-500 border border-black bg-black hover:text-black hover:bg-red-500 p-1 mx-2'>
            Delete &#x2716;
          </button>
        </div>
      </div>
      <div className='card__row'>
        <span className='card__label'>Notes:</span>
        <span className='card__value'>indefinite article</span>
      </div>
      <div className='card__row'>
        <span className='card__label'>Context:</span>
        <span className='card__value'>Der Kreuzbau ist ein Typen­bau</span>
      </div>
    </div>
  );
}

export default NewCard;
