//import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Ana"

  return (
    <div className="App">
      <SayMyName nome="Roberto"/>
      <SayMyName nome="Pedro"/>
      <SayMyName nome={nome}/> {/* Nesse caso seria Ana */}
      <Pessoa nome="João" idade="21" profissao="Engenheiro de Software" foto="https://via.placeholder.com/50" />
    </div>
  );
}

export default App;
