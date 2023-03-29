import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  let myName = 'Fulano';

  const [time, setTime] = useState('00:00');
  const [greeting, setGreeting] = useState('--');
  const [phrase, setPhrase] = useState('');
  const [phraseAuthor, setPhraseAuthor] = useState('');

  useEffect(() => {
    const getPhrase = async () => {
      const req = await fetch('https://allugofrases.herokuapp.com/frases/random');
      const json = await req.json();
      setPhrase(json.frase);
      setPhraseAuthor(json.autor);
    }
    getPhrase();
  }, []);

  useEffect(() => {
    let timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    updateGreeting();
  }, [time]);


  return (
    <div className="App">
      <div className="top"></div>
      <div className="middle">
        <h1>{time}</h1>
        <h3>{greeting}</h3>
      </div>
      <div className="bottom">
        <div className="phrase">
          "{phrase}"
          <div className="author">{phraseAuthor}</div>
        </div>
      </div>
    </div>
  );
}

export default App;