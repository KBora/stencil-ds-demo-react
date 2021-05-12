import './App.css';
import Hexagram from './Hexagram';

function App() {
  return (
    <div className="App">
      <twds-hexagram lines="111111"></twds-hexagram>

      <Hexagram lines="010101">hello</Hexagram>

    </div>
  );
}

export default App;
