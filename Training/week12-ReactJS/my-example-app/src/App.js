import logo from './logo.svg';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import RandomNumber from './components/week 12-day2/RandomNumber';

function App() {
  return (
    <div className="App">
    <h1>Hello FED 2201</h1>

    <div className="day-section">
      <ButtonCounter increment="" decrement=""/>
      <ButtonCounter increment="Plus 1" decrement="Minus One"/>
   
    </div>

    <div className="day-section">
          <h2>Week 12 day 2 - React Lifecycle</h2>
          <RandomNumber />
    </div>
    </div>
  );
}

export default App;
