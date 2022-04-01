import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";

import "./App.css";
import ButtonCounter from "./components/week12-day1/ButtonCounter";
import ButtonCounterTwo from "./components/week12-day1/ButtonCounterTwo";
import RandomNumber from "./components/week12-day2/RandomNumber";
import FuncRandomNumber from "./components/week12-day2/FuncRandomNumber";
import Day from "./components/week13/day1/HOC/Day";
import Home from "./components/week13/day1/Home";
import Lists from "./components/week13/day1/Lists";
import Ajax from "./components/week13/day2/Ajax";
import NotFound from "./components/week13/day1/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello FED 2201</h1>

        <div className="navigation">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/lists">Lists</Link>
            <Link to="/ajax">AJAX</Link>
            {/* <Link to="/ajax">w12d1</Link>
            <Link to="/ajax">w12d2</Link>
            <Link to="/ajax">w13d1</Link>
            <Link to="/ajax">w13d2</Link> */}
          </nav>
        </div>

        {/* <Day title="Week 12 Day 1 - React Intro" />
      <ButtonCounter increment="" decrement="" />
      <ButtonCounterTwo increment="Plus 1" decrement="Minus One" />

      <Day title="Week 12 Day 2 - React Lifecycle" />
      <RandomNumber maxNumber="499" />
      <FuncRandomNumber maxNumber="10" /> 
      <Day title="Week 13 Day 1 - React Routing and Lists" />
    */}

        <Day title="Week 13 Day 2 - React Axios, AJAX, and Forms" />
        <Switch>
          <Route path="/" element={<Home />} />

          <Route path="/lists/*" element={<Lists />} />

          <Route path="/ajax" element={<Ajax />} />

          <Route path="/*" element={<NotFound />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
