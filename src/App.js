import './App.css';
import Simpsons from "./components/simpson/Simpsons";
import Morty from "./components/RicKandMorty/RicKandMorty";
import Rick from "./components/Rick&Morty/Users";


function App() {
  return (
      <div className="App">
        <h2>Simpson family</h2>
        <Simpsons/>
        <h2>The Rick and Morty</h2>
        <Rick/>
        <h2>The Rick and Morty from API</h2>
        <Morty/>
      </div>
  );
}

export default App;