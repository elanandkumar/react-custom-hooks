import './App.css';
import { TestUseFetch } from './components/use-fetch';
import { TestUseDebounce } from './components/use-debounce';
import { TestUseToggle } from './components/use-toggle';
import { TestUseLocalStorage } from './components/use-local-storage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hooks Test playground</h3>
      </header>
      <TestUseFetch />
      <TestUseDebounce />
      <TestUseToggle />
      <br></br>
      <TestUseLocalStorage />
    </div>
  );
}

export default App;
