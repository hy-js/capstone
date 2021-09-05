import React, { Component } from 'react';
import $ from 'jquery';

export default class App extends Component {
  jQuerycode = () => {
    var words = $('#text p').text().split(/\s+/);
    var text = words.join('</span> <span>');
    $('#text p')
      .first()
      .html('<span>' + text + '</span>');
    $('span').on('click', function () {
      $(this).css('background-color', 'highlight');
      // $( this).prev().css( "border-bottom", "1px solid black" );
      // $( this).prev().prev().css( "border-bottom", "1px solid black" );
      // $( this).next().css( "border-bottom", "1px solid black" );
      // $( this).next().next().css( "border-bottom", "1px solid black" );
      $(this).addClass('selected');
    });
    $('.button').click(function () {
      var all = $('.selected')
        .map(function () {
          return this.innerHTML;
        })
        .get();
      alert(all.join());
    });
  };
  componentDidMount() {
    this.jQuerycode();
  }
  render() {
    return (
      <div className='article h-3/6'>
        <main role='main' className='w-full flex-grow pt-1 px-3'>
          <div id='text'>
            <p>
              Second-language acquisition (SLA), sometimes called
              second-language learning — otherwise referred to as L2 (language
              2) acquisition, is the process by which people learn a second
              language. Second-language acquisition is also the scientific
              discipline devoted to studying that process. The field of
              second-language acquisition is a sub-discipline of applied
              linguistics but also receives research attention from a variety of
              other disciplines, such as psychology and education.
              A central theme in SLA research is that of interlanguage: the idea
              that the language that learners use is not simply the result of
              differences between the languages that they already know and the
              language that they are learning, but a complete language system in
              its own right, with its own systematic rules. This interlanguage
              gradually develops as learners are exposed to the targeted
              language. The order in which learners acquire features of their
              new language stays remarkably constant, even for learners with
              different native languages and regardless of whether they have had
              language instruction. However, languages that learners already
              know can have a significant influence on the process of learning a
              new one. This influence is known as language transfer.
            </p>
            <a href="https://en.wikipedia.org/wiki/Second-language_acquisition" className="text-xs mx-2 underline"> Source </a>
          </div>
        </main>
        <div className='my-5 grid place-items-center'>
          <button className='btn--primary btn'>Add to Vocab ➢</button>
        </div>
      </div>
    );
  }
}
