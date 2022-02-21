//import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';

function App() {

  const nome = "Ana"

  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Roberto"/>
      <SayMyName nome="Pedro"/>
      <SayMyName nome={nome}/> {/* Nesse caso seria Ana */}
    </div>
  );
}

export default App;
