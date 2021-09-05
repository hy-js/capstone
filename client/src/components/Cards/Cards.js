import React from 'react';
import Card from './Card';

export default function Cards( {cards}) {

  return (
    <div>
      <h1 className='hero'>Community Flash Cards</h1>
      <div className='word-list'>
        <div>
          {cards.map((card) => {
            return <Card key={card.id} {...card} />;
          })}
        </div>
      </div>
    </div>
  );
}
