import './App.scss';
import Dorpdown from './componetns/Dropdown/Dropdown';
import Card from './componetns/Card/Card';
import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { isOpen, setIsOpen } = useStateContext();
  return (
    <div className="App">
      <div onClick={()=>{
        if(isOpen){
          setIsOpen(false)
        }
      }} className='content'>
        <Dorpdown/>
        <Card />
      </div>
    </div>
  );
}

export default App;
