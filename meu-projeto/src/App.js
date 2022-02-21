//import logo from './logo.svg';
import './App.css';


function sum(a, b) {
  return a + b
}


function App() {

const name = "Gabriel"

const newName = name.toUpperCase()
  return (
    <div className="App">
      <h1>Olá Pessoal, meu nome é {newName} e este é o meu projeto em React</h1>
      <p>Espero que gostem!!!</p>
      <p>Eu acho que vou gostar de aprender :) </p>
      <p>A soma entre 2 e 3 é igual à {sum(2,3)} </p>
    </div>
  );
}

export default App;
