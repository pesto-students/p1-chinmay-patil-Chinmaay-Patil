import { useState } from 'react';
import './App.css';
import InputShortener from './components/Input';
import LinkResult from './components/Result';
import Header from './components/header';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Header />
      <div className="container">
        <InputShortener setInputValue={setInputValue} />
        <LinkResult inputValue={inputValue} />
      </div>
    </div>
  );
}

export default App;
