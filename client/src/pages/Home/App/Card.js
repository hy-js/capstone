import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Card(props) {
   const [word, setWord] = useState(props.word);
   const [language, setLanguage] = useState(props.language);
   const history = useHistory();

   async function wordCreate(e) {
     e.preventDefault();
     try {
       const profileData = {
         word,
         language

       };
       await axios.post('http://localhost:5000/vocab', profileData);
       console.log(profileData)
       history.push('/home')
     } catch (err) {
       console.error(err);
     }
   }
   return (
      <div className='card dark:border-gray-400'>
        <form onSubmit={wordCreate}>
          <div className='card__header'>
            <h3 className='card__title hero'>{props.word}</h3>
            <input
              className='hidden'
              type='text'
              name='word'
              onChange={(e) => setWord(e.target.value)}
              value={word}
            />
            <input
              className='hidden'
              type='text'
              name='language'
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
            />
            {/* <div className='notes__edit'>
              <span className='card__label'>Notes:</span>
              <textarea />
            </div> */}
            <button
              type='submit'
              className='text-white border border-black bg-black hover:text-black hover:bg-white p-1 mx-2'>
              Add ➤
            </button>
          </div>
        </form>
      </div>
    );
  }
