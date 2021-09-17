import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';
import NewVocabEdit from './NewVocabEdit';
import useFetch from '../../../components/Hooks/useFetch';

export const ArticleContext = React.createContext();

function App() {
  let articles = sampleArticles
  const { data: article } = useFetch('http://localhost:5000/article/all');
  console.log(article)
  if(article) articles = article

  const [lang, setLanguage] = useState('en');
  var result = articles.filter((obj) => {
    return obj.language === lang;
  });
  // const [selectedArticle, setSelectedArticle] = useState(result);
  const [selectedVocab, setSelectedVocab] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(result);
  const selectedArticle = articles.find(
    (article) => article.id === selectedArticleId)
  const vocabArray = selectedVocab;

  const articleContextValue = {
    handleArticleSelect,
    handleVocabSelect
  };

  function handleArticleSelect(id) {
    setSelectedArticleId(id);
    console.log(id);
  }

  function handleVocabSelect(array) {
    setSelectedVocab(array);
    console.log(array);
  }

  return (
    <>
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
      <ArticleContext.Provider value={articleContextValue}>
        <ArticleList articles={result} />
        <h2 className='hero'>New Vocab:</h2>
        {selectedArticle && (
          <NewVocabEdit article={selectedArticle} vocab={vocabArray} />
        )}
      </ArticleContext.Provider>
    </>
  );
}
const sampleArticles = [
  {
    id: '61348b240ef7c01510a26ed9',
    name: 'Zweitspracherwerb',
    language: 'de',
    source: 'https://de.wikipedia.org/wiki/Zweitspracherwer',
    paragraphs: [
      {
        id: 1,
        text: 'Die Zweitsprache ist die Sprache, die nach der Erstsprache gelernt wird – also die zweite erlernte Sprache. Der Begriff bezeichnet jedoch nicht nur die zweite gelernte Sprache nach der Erstsprache, sondern kann auch für eine dritte, vierte, fünfte Sprache usw. stehen. Ob wir von einer Zweitsprache oder einer Fremdsprache sprechen, hängt vom Erwerbskontext ab. Normalerweise wird die Abkürzung L2 als allgemeine Bezeichnung für eine Zweitsprache oder Fremdsprache verwendet. Die Abkürzung L1 gilt dementsprechend für die zuerst erworbene Sprache. Eine dritte Sprache (auch Tertiärsprache genannt) würde also mit L3 bezeichnet werden. '
      },
      {
        id: 2,
        text: 'Wissenschaftler diskutieren darüber, ob der Erstspracherwerb auch ein doppelter oder dreifacher Erstspracherwerb sein kann (z. B. wenn ein Kleinkind die Sprachen beider Eltern als Erstsprache erlernt). Darüber hinaus ist man sich nicht einig, ab welchem Alter man noch von einem doppelten Erstspracherwerb spricht und ab wann es zu einem frühen Zweitspracherwerb kommt. Allerdings wird in vielen Theorien zum Spracherwerb ab dem dritten Lebensjahr nicht mehr von Erstspracherwerb gesprochen. '
      },
    ]
  },
  {
    id: '61338b240ef7c01510a26ed7',
    name: 'Seconda Lingua',
    language: 'it',
    source: 'https://it.wikipedia.org/wiki/Apprendimento_della_seconda_lingua',
    paragraphs: [
      {
        id: 1,
        text: "L'apprendimento della seconda lingua (in inglese, Second language acquisition o SLA, ovvero Acquisizione della seconda lingua) è il processo per cui persone imparano le lingue in aggiunta alla loro lingua nativa; è il termine per qualsiasi lingua appresa dopo la prima infanzia, incluso ciò che è nel tempo la terza o un'ulteriore lingua. La SLA è l'apprendimento di ogni seconda lingua, quella cioè che deve essere appresa e viene spesso definita lingua obbiettivo o L2 (e lo SLA viene spesso chiamato L2A, per acquisizione della L2). Lo studio della SLA viene solitamente considerato parte della linguistica applicata. "
      },
      {
        id: 2,
        text: "Il termine acquisizione della lingua è diventato comune dopo che Stephen Krashen distinse un apprendimento formale e non costruttivo. Oggi la maggior parte dei pensatori usano apprendimento delle lingue e acquisizione delle lingue in maniera intercambiabile, a meno che non ci si riferisca direttamente all'opera di Krashen. Comunque l'acquisizione della seconda lingua o SLA si è cementato come il termine preferito per questa disciplina universitaria.  "
      }
    ]
  },
  {
    id: '61354b240ef7c01510a26ed2',
    name: 'Second Language Acquistion',
    language: 'en',
    source: 'https://en.wikipedia.org/wiki/Second-language_acquisition',
    paragraphs: [
      {
        id: 1,
        text: 'Second-language acquisition (SLA), sometimes called second-language learning — otherwise referred to as L2 (language 2) acquisition, is the process by which people learn a second language. Second-language acquisition is also the scientific discipline devoted to studying that process. The field of second-language acquisition is a sub-discipline of applied linguistics but also receives research attention from a variety of other disciplines, such as psychology and education. '
      },
      {
        id: 2,
        text: 'A central theme in SLA research is that of interlanguage: the idea that the language that learners use is not simply the result of differences between the languages that they already know and the language that they are learning, but a complete language system in its own right, with its own systematic rules. This interlanguage gradually develops as learners are exposed to the targeted language. The order in which learners acquire features of their new language stays remarkably constant, even for learners with different native languages and regardless of whether they have had language instruction. However, languages that learners already know can have a significant influence on the process of learning a new one. This influence is known as language transfer. '
      }
    ]
  },
  {
    id: '61348b230ef7c01510a26ed4',
    name: 'Усвое́ние второ́го языка́ ',
    language: 'ru',
    source:
      'https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D0%B2%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2%D1%82%D0%BE%D1%80%D0%BE%D0%B3%D0%BE_%D1%8F%D0%B7%D1%8B%D0%BA%D0%B0',
    paragraphs: [
      {
        id: 1,
        text: 'Усвое́ние второ́го языка́ (англ. Second-language acquisition) в англоязычных странах рассматривается как самостоятельная дисциплина в рамках прикладной лингвистики, изучающая процесс усвоения человеком второго языка[⇨]. Второй язык — это язык, который изучается человеком естественным образом или с помощью специального обучения, после освоения родного языка. Термин «усвоение второго языка» может распространяться и на изучение третьего, четвёртого и других языков[1], так как изучение последующих языков следует по тому же пути. Усвоение второго языка редко приводит к полноценному билингвизму. Усвоение второго языка является процессом приобретения знаний и навыков[⇨], а билингвизм является результатом этого сложного и длительного процесса, который в реальных условиях редко осуществляется до конца.  '
      }
    ]
  },
  {
    id: '61368b240ef7c01510a26ed8',
    name: 'Segundo Lenguaje',
    language: 'es',
    source: 'https://es.wikipedia.org/wiki/Adquisici%C3%B3n_de_segundo_lenguaje',
    paragraphs: [
      {
        id: 1,
        text: "La adquisición de un segundo lenguaje o segunda lengua (ASL), o L2 (Lengua 2) es el proceso por el cual las personas aprenden una segunda lengua. La adquisición de una segunda lengua es también la disciplina científica que se dedica a estudiar ese proceso. El campo de la adquisición de una segunda lengua parte del desarrollo de la lingüística aplicada y de la psicolingüística. Pero, también se realizan investigaciones en otras disciplinas, como la psicología y la educación. "
      },
      {
        id: 2,
        text: 'Un tema central en la investigación de la ASL es el interlenguaje, la idea de que el lenguaje que usan los estudiantes no es simplemente el resultado de las diferencias entre los idiomas que ellos ya dominan y el idioma que están aprendiendo, sino que es un sistema de lenguaje completo en su propio derecho, con sus propias reglas sistemáticas. Este interlenguaje se desarrolla gradualmente a medida que los alumnos se ven expuestos al idioma específico. El orden en que los estudiantes adquieren las características de su nuevo idioma se mantiene notablemente constante, incluso para los estudiantes con diferentes idiomas nativos, sin importar si se ha recibido instrucción en ese idioma. Sin embargo, los idiomas que los alumnos ya conocen pueden tener una influencia significativa en el proceso de aprendizaje de uno nuevo. Esta influencia se le conoce como transferencia de idioma. '
      }
    ]
  },
  {
    id: '61358b240ef7c01510a26ed9',
    name: 'Acquisition des langues',
    language: 'fr',
    source: 'https://fr.wikipedia.org/wiki/Acquisition_des_langues_%C3%A9trang%C3%A8res',
    paragraphs: [
      {
        id: 1,
        text: "L’acquisition des langues étrangères est une science humaine appliquée qui réunit des aspects théoriques de la psychologie et de la linguistique. L'objet de cette discipline est, l'étude des facteurs influençant l'acquisition d'une langue seconde ou langue étrangère ; ces différents facteurs étant linguistiques, cognitifs et socio-psychologiques.  "
      },
      {
        id: 2,
        text: "Les principaux points du domaine sont: Le rôle de la langue maternelle dans l'apprentissage d'une langue seconde, L'acquisition d'une langue seconde pour un sourd, L'influence de l'acquisition d'une langue seconde sur la réussite scolaire, L'importance de l'enseignant dans l'apprentissage d'une langue seconde, La possibilité d'accélérer le développement d'une langue seconde, Les principales différences entre la classe de langue et le milieu naturel, La similarité des processus enclenchés lors de l'acquisition d'une langue seconde et des langues subséquentes,Les caractéristiques des apprenants les plus doués, L'existence d'une période critique dans l'acquisition d'une langue seconde. "
      }
    ]
  }
];


export default App;
