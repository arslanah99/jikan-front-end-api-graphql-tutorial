import logo from './logo.svg';
import './App.css';
import { AnimeDetails } from './animeDetails';

function App() {
  return (
    <div className="App">
      <AnimeDetails animeID={69}/>
    </div>
  );
}

export default App;
