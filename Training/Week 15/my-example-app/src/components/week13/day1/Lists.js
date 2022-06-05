import {
  Routes as Switch,
  Route,
  Link,
  useMatch,
  UseParams,
} from "react-router-dom";

import IndList from "./IndList";

function Lists() {
//     let routeMatch = useMatch;

    // lists that could potentially be displayed
    let cars = [
        "Honda",
        "Ford",
        "Dodge",
        "Toyota",
        "Nissan"
    ]

    let foods = [
        "pizza",
        "hamburger",
        "spaghetti",
        "cereal",
        "steak"
    ]
    let heroes = [
        "Captain America",
        "Iron Man",
        "The Hulk",
        "Thor"
    ]
    let tvShows = [
        "The Office",
        "Dragon Ball Z",
        "Community",
        "Breaking Bad",
        "SpongeBob SquarePants"
    ]

  return (
    <div className="navigation">
      <h2>Lists Page</h2>

      <nav>
          <Link to="cars">Cars</Link>
          <Link to="foods">Foods</Link>
          <Link to="/lists/heroes">Heroes</Link>
          <Link to="tvshows">TV Shows</Link>
      </nav>

      <Switch>
          <Route path="/cars" element={<IndList listContent={cars} />} /> 
          <Route path="/foods" element={<IndList listContent={foods} />} /> 
          <Route path="/heroes" element={<IndList listContent={heroes} />} /> 
          <Route path="/tvshows" element={<IndList listContent={tvShows} />} /> 
      </Switch>
    </div>
  );
}

export default Lists;
