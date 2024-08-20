import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import Random from './components/random';
import Star from './components/star-rating';

function App() {
  return (
    <div className="App">
        <Accordion></Accordion>
        <Random></Random>
        <Star stars={10}/>
    </div>
  );
}

export default App;
