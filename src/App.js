import { useRef, useState } from 'react';
import './App.css';

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const phrases = ['Я сподіваюся, ти випадково...', 'Не засмучуй зайчика...', 'Будь ласочка, не роби необдуманих рішень', 'А якщо натиснеш "Так", то буде бонус...'];

function App() {
  const [currentPhrase, setCurrentPhrase] = useState(null);
  const [isYes, setIsYes] = useState(false);
  const noButton = useRef();
  console.log(currentPhrase);

  const onNoClick = () => {
    if (noButton.current) {
      noButton.current.style.position = 'absolute';
      noButton.current.style.top = `${getRandom(0, window.innerHeight - 60)}px`;
      noButton.current.style.right = `${getRandom(0, window.innerWidth - 140)}px`;

      setCurrentPhrase(phrases[getRandom(0, phrases.length - 1)]);
      setIsYes(false);
    }
  }

  const onYesClick = () => {
    setIsYes(true);
    setCurrentPhrase(null)
    
    if (noButton.current) {
      noButton.current.style.display = 'none';
    }
  }

  return (
    <div className="App">
      <div className='question-block'>
        <p className='question'>Ти згодна пробачити нещасного програміста і стати його валентинкою?🥺🥺🥺</p>
      </div>

      <div className='buttons-block'>
        <button className='button-yes' onClick={onYesClick}>Так</button>
        <button className='button-no' ref={noButton} onMouseOver={onNoClick}>Ні</button>
      </div>

      {currentPhrase && (
        <>
          <img className='image' src={require('./bunny.png')} alt='bunny' />
          <p className='phrase'>{currentPhrase}</p>
        </>
      )}

      {isYes && (
        <div className='saul'>
          <img src={require('./saul.jpg')} alt='saul' />
          <p className='success-phrase'>Вітаю, відповідь правильна!!!</p>
          <p className='success-phrase'>Напишіть вашому валентину промокод "Я ЛЮБЛЮ ДУШНІЛУ" та отримайте знижку 100% на покупку двох кіндер джоїв</p>
        </div>
      )}

      {isYes && (
        <>
          <img className='festival festival-left' src={require('./festival.png')} alt='festival' />
          <img className='festival festival-right' src={require('./festival.png')} alt='festival' />
        </>
      )}
    </div>
  );
}

export default App;
