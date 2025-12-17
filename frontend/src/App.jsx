import "./App.css";
import { HeroPage, NavBar, StreakStatus } from "./components/index";

function App() {
  return (
    <>
      <div className="main-container">
        <HeroPage />
        <StreakStatus />
        <NavBar />
      </div>
    </>
  );
}

export default App;
