import "./App.css";
import { HeroPage, NavBar, StreakStatus, Footer } from "./components/index";

function App() {
  return (
    <>
      <div className="main-container">
        <HeroPage />
        <StreakStatus />
        <NavBar />
        <Footer />
      </div>
    </>
  );
}

export default App;
