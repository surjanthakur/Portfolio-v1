import "./App.css";
import { HeroPage, NavBar, Footer } from "./components/index";

function App() {
  return (
    <>
      {/* main layout structure */}
      <div className="main-container">
        <HeroPage />
        <NavBar />
        <Footer />
      </div>
    </>
  );
}

export default App;
