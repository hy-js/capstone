import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';
import uuidv4 from 'uuid/v4';
import ArticleEdit from './ArticleEdit';
import NewCards from './NewCards';

export const ArticleContext = React.createContext();
const LOCAL_STORAGE_KEY = 'parallelreader.articles';

function App() {
  const [selectedArticleId, setSelectedArticleId] = useState();
  const [selectedVocab, setSelectedVocab] = useState([]);
  const [articles, setArticles] = useState(sampleArticles);
  const selectedArticle = articles.find(
    (article) => article.id === selectedArticleId
  );
  const vocabArray = selectedVocab

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setArticles(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(articles));
  }, [articles]);

  const articleContextValue = {
    // handleArticleAdd,
    // handleArticleDelete,
    handleArticleSelect,
    handleVocabSelect,
    // handleArticleChange
  };

  function handleArticleSelect(id) {
    setSelectedArticleId(id);
    console.log(id)
  }

  function handleVocabSelect(array) {
    setSelectedVocab(array)
    console.log(array)
  }

  return (
    <>
      <h2 className='hero'>Article of the Day:</h2>
      <ArticleContext.Provider value={articleContextValue}>
        <ArticleList articles={articles} />
        <h2 className='hero'>New Vocab:</h2>
        {selectedArticle && <ArticleEdit article={selectedArticle} vocab={vocabArray} />}
      </ArticleContext.Provider>
    </>
  );
}

const sampleArticles = [
  {
    id: '61348b240ef7c01510a26ed9',
    name: 'Choanozoa',
    language: 'de',
    source: 'https://de.wikipedia.org/wiki/Choanozoa',
    paragraphs: [
      {
        id: 1,
        text: 'Zu der Gruppe der Choanozoa gehören alle vielzelligen Tiere (Metazoa) und ihre nächsten Verwandten, die Kragengeißeltierchen (Choanoflagellata). Es zählen sämtliche Lebensformen dazu, die den Zelltyp der Kragengeißelzelle (Choanocyt) ausbilden oder deren Vorfahren wahrscheinlich einmal diesen Zelltyp ausgebildet hatten. '
      },
      {
        id: 2,
        text: 'Unter heutigen Tieren werden Kragengeißelzellen nur bei den Schwämmen (Porifera) vorgefunden, bei allen anderen Tieren gingen sie verloren. Bis auf wenige Ausnahmen ernähren sich diese Organismen von Bakterien, die sie mit Hilfe der Kragengeißelzellen aus dem Wasser filtern. Die übrigen Tiere haben keine Kragengeißelzellen. Stattdessen besitzen viele von ihnen recht ähnliche Zelltypen. '
      },
      {
        id: 3,
        text: 'Bei den Kragengeißeltierchen handelt es sich um mikroskopisch kleine Eukaryoten aus Kragengeißelzellen. Ihre eiförmigen bis rundlichen Zellkörper haben wenige bis höchstens einige zehn Mikrometer Durchmesser. Kragengeißeltierchen bilden sowohl freischwimmende als auch sessile Formen und kommen als Einzelzellen oder in kleinen Zellkolonien vor. Sie gedeihen in den Meeren und im Brackwasser sowie in Süßgewässern einschließlich Bodenwässern und Aquiferen. Kragengeißeltierchen ernähren sich als Filtrierer von Bakterien und Viruspartikeln. '
      }
    ]
  }
];

export default App;
