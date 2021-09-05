import React, { useState, useEffect } from 'react';
import Cards from './Cards'

export const CardContext = React.createContext()
const LOCAL_STORAGE_KEY = 'app.cards'

function CardApp() {
   // Set state variables
   const [selectedCardId, setSelectedCardId] = useState()
   const [cards, setCards] = useState(sampleCards)
   const selectedCard = cards.find(card => card.id === selectedCardId)

   // Fill sample Cards
   useEffect(() => {
      const cardJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (cardJSON != null) setCards(JSON.parse(cardJSON))
    }, [])

   //  Set Sample Cards
   useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards))
    }, [cards])

    const cardContextValue = {
      handleCardDelete,
      handleCardSelect,
      handleCardChange
    }

    function handleCardSelect(id) {
      setSelectedCardId(id)
    }

    function handleCardChange(id, card) {
      const newCards = [...cards]
      const index = newCards.findIndex(r => r.id === id)
      newCards[index] = card
      setCards(newCards)
    }

    function handleCardDelete(id) {
      if (selectedCardId != null && selectedCardId === id) {
        setSelectedCardId(undefined)
      }
      setCards(cards.filter(card=> card.id !== id))
    }

    return (
      <CardContext.Provider value={cardContextValue}>
        <Cards cards={cards} />
        {selectedCard}
      </CardContext.Provider>
    )
}


const sampleCards = [
   {
     id: 1,
     word: 'Kreuzbau',
     language: 'de',
     notes: 'Gender: der, Plural: -en',
     translation: [
       {
         id: 1,
         source: 'Rhys',
         translation: 'Cross building',
         language: 'en'
       }
     ],
     context: [
       {
         id: 1,
         source: 'https://de.wikipedia.org/wiki/Kreuzbau_(Hamburg)',
         ngram: 'Der Kreuzbau ist ein Typen­bau'
       },
       {
         id: 2,
         source: 'https://de.wikipedia.org/wiki/Kreuzbauten_(Bonn)',
         ngram: 'Die Kreuzbauten in Bonn sind ein Gebäudeensemble'
       }
     ]
   },
   {
     id: 2,
     word: 'Klassenzimmer',
     language: 'de',
     notes: 'Plural',
     translation: [
       {
         id: 1,
         source: 'Rhys',
         translation: 'Class room',
         language: 'en'
       }
     ],
     context: [
       {
         id: 1,
         source: 'https://de.wikipedia.org/wiki/Kreuzbau_(Hamburg)',
         ngram: ' Die Klassen­zimmer werden durch ein zentra­les Treppen­haus direkt erschlos­sen'
       }
     ]
   }
 ];

 export default CardApp;