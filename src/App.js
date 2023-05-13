import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [idea, setIdea] = useState('');

  const getIdea = useCallback(
    async() => {
      const response = await fetch ('http://www.boredapi.com/api/activity/ ')
      const data = await response.json();

      setIdea(data.activity)
    },[]
    )
  
  useEffect(()=> {
    getIdea()
  },[getIdea])

  return (
    
    <div className="App">
      <div className='container'>
        <div className='title'>
          <h1>Do you wanna have some fun?</h1>
        </div>
        <div className='par'>
        <p className='idea'>{idea}</p>
        </div>
      
      <div>
      <button onClick={getIdea} className="button">click here</button>
      </div>
      
      </div>
  
    </div>
  );
}

export default App;
