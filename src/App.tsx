import "./App.css";
import {
  TestUseFetch,
  TestUseDebounce,
  TestUseToggle,
  TestUseLocalStorage,
  TestUsePrevious,
  TestUseClickOutside,
  TestUseMediaQuery,
} from "./components";

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
      <TestUsePrevious />
      <TestUseClickOutside />
      <TestUseMediaQuery />
    </div>
  );
}

export default App;
