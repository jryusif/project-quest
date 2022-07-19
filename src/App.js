import './App.css';
import TextMobileStepper from './component/SlidderCard';

function App() {
  
  return (
    <div  className="App" >
      <header className="navBar" id='header'>
        <h1 style={{color:"#e74b16"}}> Are you Disillusioned?</h1>
      </header>
      <div className="pageContent"  >

        <TextMobileStepper></TextMobileStepper>
      </div>
      
      </div>
    
    
  );
}

export default App;
