import React from 'react';

function Wordlist(props) {
  const unsortedWords = props.words;
  const words = unsortedWords.sort((a, b) => a.localeCompare(b));
  const listItems = words.map((word) =>
    <li key={word.toString()}>
      {word}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const words = ["Kreuzbau", "Klassenzimmer",];
const Vocab = () => {
  return (
    <>
      <Wordlist words={words} />
    </>
  );
};

export default Vocab;
