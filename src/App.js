import './App.css';
import Accordion from './components/accordion';
import Random from './components/random';
import Star from './components/star-rating';
import Slider from './components/slider';
import LoadData from './components/products';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRcodeGenerator from './components/qr-code';
import DarkMode from './components/dark-mode';

function App() {
  return (
    <div className="App">
        <Accordion></Accordion>
        <Random></Random>
        <Star stars={10}/>
        <Slider url={'https://picsum.photos/v2/list'} limit={10}></Slider>
        <LoadData></LoadData> 
        <TreeView menus={menus}></TreeView>
        <QRcodeGenerator></QRcodeGenerator>
        <DarkMode></DarkMode>
    </div>
  );
}

export default App;
