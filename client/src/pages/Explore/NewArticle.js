import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

export default function NewArticle() {
  const history = useHistory();

  const [title, setTitle] = useState();
  const [language, setLanguage] = useState('');
  const [source, setSource] = useState('');
  const [paragraphs, setParagraphs] = useState([]);

  async function articleCreate(e) {
    e.preventDefault();
    try {
      const articleData = {
        title,
        language,
        source
        // paragraphs
      };
      // make http request
      await axios.post('http://localhost:5000/article/create', articleData);
      console.log(articleData);
      history.push('/explore');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='card dark:border-gray-400 overflow-hidden'>
      <h2 className='hero'>Create Article:</h2>
      <div className='h-max text-black dark:text-white dark:border-white'>
        <form onSubmit={articleCreate}>
          <label>
            <p>Title</p>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              name='name'
              className='border dark:text-black'
              type='text'
            />
          </label>
          <label>
            <p>Language</p>
            <input
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
              name='language'
              className='border dark:text-black'
              type='text'
            />
          </label>
          <label>
            <p>Source</p>
            <input
              onChange={(e) => setSource(e.target.value)}
              value={source}
              name='source'
              className='border dark:text-black'
              type='text'
            />
          </label>
          <label>
            <p>Text</p>
            <textarea
              onChange={(e) => setParagraphs(e.target.value)}
              value={paragraphs}
              name='paragraphs'
              className='border dark:text-black w-full h-auto'
              type='text'
            />
          </label>
          <ul className='items-center my-5'>
            <li>
              <button
                type='submit'
                className='text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>
                Submit Article
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
