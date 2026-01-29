import { useState } from 'react'
import './App.css';

function App() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <div className='App'>
      <h1>Declarative Approach</h1>
      <button onClick={toggleHighlight}>
        Toggle Highlight
      </button>
      <p className={isHighlighted ? 'highlight' : ''}>
        This text will be highlighted when the button is clicked.
      </p>
    </div>
  );
}

export default App;