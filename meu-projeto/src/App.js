//import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from "./components/Frase"

function App() {

  const nome = "Ana"

  return (
    <div className="App">
        <h1>Testando CSS</h1>
      <SayMyName nome="Roberto"/>
      <SayMyName nome="Pedro"/>
      <SayMyName nome={nome}/> {/* Nesse caso seria Ana */}
        <Frase/>
      <Pessoa nome="João" idade="21" profissao="Engenheiro de Software" foto="https://via.placeholder.com/50" />
    </div>
  );
}

export default App;
