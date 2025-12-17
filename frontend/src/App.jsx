import "./App.css";
import { HeroPage, NavBar, Footer, Tooltip } from "./components/index";

function App() {
  return (
    <>
      <div className="main-container">
        <HeroPage />
        <Tooltip />
        <Footer />
      </div>
    </>
  );
}

export default App;
