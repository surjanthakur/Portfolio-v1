import "./App.css";
import { HeroPage, NavBar, Footer } from "./components/index";

function App() {
  return (
    <>
      <div className="main-container">
        <HeroPage />

        <Footer />
      </div>
    </>
  );
}

export default App;
