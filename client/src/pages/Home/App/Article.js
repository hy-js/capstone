import React, { useContext } from 'react';
import ParagraphList from './ParagraphList';
import { ArticleContext } from './App';
import $ from 'jquery';
import useFetch from '../../../components/Hooks/useFetch';

export default function Article(props) {
  const { handleArticleSelect, handleVocabSelect } = useContext(ArticleContext);
  const { id, name, language, source, paragraphs } = props;

  // Split and create selectable words
  let newWords = [];
  var words = $('#text').text().split(/\s+/);
  var text = words.join('</span> <span>');
  $('#text')
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
        if (language === data[i].language) {
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
  }
  function showTranslation() {
    console.log(language);
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (language === data[i].language) {
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
  }

  return (
    <div className='article mx-2 border-b-2'>
      <h2 className='hero'>Article of the Day:</h2>
      <div className='article__header'>
        <div>
          <a href={source} rel='noopener noreferrer' target='_blank'>
            <h3 className='article__title hero underline'>{name}</h3>
          </a>
          <span className='article__language'>
            <em>{language}</em>
          </span>
        </div>
        <div className='grid article__row'>
          <div id='article' className='article__paragraphs'>
            <ParagraphList paragraphs={paragraphs} />
          </div>
        </div>
      <div className='grid-cols-2 grid my-5'>
        <button
          className='mx-2 text-black border border-black bg-white hover:text-white hover:bg-black flex items-center p-1'
          onClick={() => {
            showAllVocab(newWords);
          }}>
          Show Parallel Vocab
        </button>
        <button
          className='mx-2 text-black border border-black bg-white hover:text-white hover:bg-black flex items-center p-1'
          onClick={() => {
            showTranslation(newWords);
          }}>
          Show Parallel Translations
        </button>
      </div>
        <div className='button my-5 grid place-items-center'>
          <button
            className='mx-2 text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'
            onClick={() => {
              handleVocabSelect(newWords);
              handleArticleSelect(id);
            }}>
            Add to Vocab ▼
          </button>
        </div>
      </div>
    </div>
  );
}
