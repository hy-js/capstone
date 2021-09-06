import React, { useContext } from 'react';
import ParagraphList from './ParagraphList';
import { ArticleContext } from './App';
import $ from 'jquery';

export default function Article(props) {
  const { handleArticleSelect,  handleVocabSelect } =
    useContext(ArticleContext);
  const { id, name, language, source, paragraphs } = props;

  // Parse paragraphs into single words
  // ;
  // let articleDiv = document.getElementById("paragraph-text");
  // if(articleDiv){
  //   let plainText = articleDiv.textContent
  //   console.log(plainText)
  // }
  let newWords = []
  var words = $('#text').text().split(/\s+/);
  var text = words.join('</span> <span>');
  $('#text')
    .first()
    .html('<span>' + text + '</span>');
  // Highlight word, add elected class and add to array
  $('span').on('click', function () {
    // check if word in array if so return
    // search if word is in text
    // add selected class and highlight all words
    // add 1x word into array
    if ($(this).hasClass('selected')) {
      $(this).removeClass('bg-highlight');
      $(this).removeClass('selected');
      let word = (this.innerHTML).replace(/([\u0000-\u0026\u0028-\u0040\u005B-\u0060\u007B-\u00BF\u02B0-\u036F\u00D7\u00F7\u2000-\u2BFF])+/g, "").toLowerCase();
      const index = newWords.indexOf(word);
      if (index > -1) {
        newWords.splice(index, 1);
      }
      return;
    }
    $(this).addClass('bg-highlight');
    $(this).addClass('selected');
    let word = (this.innerHTML).replace(/([\u0000-\u0026\u0028-\u0040\u005B-\u0060\u007B-\u00BF\u02B0-\u036F\u00D7\u00F7\u2000-\u2BFF])+/g, "").toLowerCase()
    newWords.push(word);
  });

  // check if word in array if so return
  // search if word is in text
  // add selected class and highlight all words
  // add 1x word into array

  return (
    <div className='article mx-2 border-b-2'>
      <div className='article__header'>
        <div>
          <a href={source} rel='noopener noreferrer' target='_blank'>
            <h3 className='article__title hero underline'>{name}</h3>
          </a>
          <span className='article__language'>
            <em>{language}</em>
          </span>
        </div>
      </div>
      <div className='article__row'>
        <div id='article' className='article__paragraphs'>
          <ParagraphList ingredients={paragraphs} />
        </div>
        <div className='button my-5 grid place-items-center'>
          <button
            className='mx-2 text-white border border-black bg-black hover:text-black hover:bg-white flex items-center p-1'
            onClick={() => {
            handleVocabSelect((newWords))
            handleArticleSelect(id)
            }}
            >
            Add to Vocab ▼
          </button>
        </div>
      </div>
    </div>
  );
}
