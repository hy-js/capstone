import React, { useState } from 'react';
import CardApp from '../../components/Cards/CardApp';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import useFetch from '../../components/Hooks/useFetch'

import sample from './sampleTexts.json';

const Demo = () => {
  const [language, setLanguage] = useState('en');

  let article = sample[language];
  let p = article.paragraphs;

  let newWords = [];
  var words = $('#text').text().split(/\s+/);
  var text = words.join('</span> <span>');
  $('#text p')
    .first()
    .html('<span>' + text + '</span>');
  $('span').on('click', function () {
    if ($(this).hasClass('in-vocab')) return;
    if ($(this).hasClass('selected')) {
      $(this).removeClass('bg-highlight');
      $(this).removeClass('selected');
      let word = this.innerHTML
        .replace(
          /([\u0000-\u0026\u0028-\u0040\u005B-\u0060\u007B-\u00BF\u02B0-\u036F\u00D7\u00F7\u2000-\u2BFF])+/g,
          ''
        )
        .toLowerCase();
      const index = newWords.indexOf(word);
      if (index > -1) {
        newWords.splice(index, 1);
      }
      return;
    }
    $(this).addClass('bg-highlight');
    $(this).addClass('selected');
    let word = this.innerHTML
      .replace(
        /([\u0000-\u0026\u0028-\u0040\u005B-\u0060\u007B-\u00BF\u02B0-\u036F\u00D7\u00F7\u2000-\u2BFF])+/g,
        ''
      )
      .toLowerCase();
    newWords.push(word);
  });

  // Highlight words already in vocab
  const { data } = useFetch('http://localhost:5000/vocab/all');
  function showAllVocab() {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        let searchValue = data[i].word;
        let searchId = data[i]._id;
        $('span').each(function () {
          if ($(this).html().indexOf(searchValue) > -1) {
            let link = '/explore/card/' + searchId;
            $(this).addClass('in-vocab').wrap(`<a href=${link}></a>`);
          }
        });
      }
    }
  }
  function showTranslation() {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        let searchValue = data[i].word;
        let translation = data[i].translation;
        $('span').each(function () {
          if ($(this).html().indexOf(searchValue) > -1) {
            if (translation) {
              $(this).addClass('bg-highlight').html(translation);
            }
          }
        });
      }
    }
  }


  return (
    <section
      id='demo'
      className='w-full flex flex-col content-center justify-center'>
      <div className='mx-auto container'>
        <h2 className='hero'>Demo</h2>
        <div className='grid grid-cols-2 gap-4 container mx-auto'>
          <div>
            <form>
              <label className='my-2'>
                <p className='inline-block underline'>Target Language:</p>
                <div className='inline-block mx-2'>
                  <select
                    className='border hover:border-gray-500 shadow leading-tight focus:outline-none focus:shadow-outline'
                    name='language'
                    onChange={(e) => setLanguage(e.target.value)}>
                    <option value='en'>English 🇦🇺</option>
                    <option value='fr'>French 🇫🇷 </option>
                    <option value='de'>German 🇩🇪 </option>
                    <option value='es'>Spanish 🇪🇸 </option>
                    <option value='it'>Italian 🇮🇹 </option>
                    <option value='ru'>Russian 🇷🇺 </option>
                  </select>
                </div>
              </label>
            </form>
            <div className='w-full flex-grow pt-1 px-3'>
              <div id='text'>
                <p>{p[0]}</p>
                <a href={article.source} className='text-xs mx-2 underline'>
                  Source
                </a>
              </div>
            </div>
          </div>
          <CardApp />
        </div>
        <div className='mt-2 mb-5 grid place-items-center px-2'>
          <Link to='/home'>
            <button className='mx-2 text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'>Check it out!</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Demo;
