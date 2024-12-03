import './App.css';
import ColoredText from './components/uppercase/uppercase'
import Button from './components/button/button';

function App() {
  return (
    <>
      <ColoredText text ='Esse texto ficará maiúsculo nao importa como foi escrtio' color = 'red'/>
      <ColoredText />

      <Button label='insira a label aqui via JS'/>
      <Button />
    </>
  );
}

export default App;
