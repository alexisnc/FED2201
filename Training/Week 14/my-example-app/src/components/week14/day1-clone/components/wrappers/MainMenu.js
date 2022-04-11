import MenuItem from "../main-menu/MenuItem";
import MessageDisplay from "../main-menu/MessageDisplay";

function MainMenu() {
  const menuOptions = [
    "Continue",
    "New Game",
    "Matchmaking",
    "Network Options",
    "Select Character",
    "Options",
    "Extras",
    "Downloadable Content",
    "Quit",
  ];

  const messages = [
    {
      title: "Hey, Vault Hunters!",
      text: "What are you waiting for? Stop reading and get  back in the game - Handsome Jack isn't going to defeat himself!",
    },
  ];

  const menuItems = menuOptions.map((option) => <MenuItem title={option.toUpperCase()} />);

  return (
    <div className="main-menu wrapper">
      <div className="main-section">
        <h1 className="robotic">MAIN MENU</h1>

        {menuItems}
      </div>

      <MessageDisplay
        messageTitle={messages[0].title}
        messageText={messages[0].text}
      />
    </div>
  );
}

// --Menu items--
// Continue
// New Game
// Matchmaking
// Network Options
// Select Character
// Options
// Extras
// Downloadable Content
// Quit

export default MainMenu;
