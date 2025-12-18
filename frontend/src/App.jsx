import "./App.css";
import { HeroPage, Footer } from "./components/index";
import About from "./pages/About";

function App() {
  return (
    <>
      {/* main layout structure */}
      <div className="main-container">
        <HeroPage />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
