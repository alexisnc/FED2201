import "./App.css";

import MainMenu from "./components/wrappers/MainMenu";
import UserDetails from "./components/wrappers/UserDetails";

function App() {
  return (
      <div className="main-display">
          <MainMenu />
          <UserDetails />
      </div>
  );
}

export default App;
