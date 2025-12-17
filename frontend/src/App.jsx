import "./App.css";
import { HeroPage, Footer } from "./components/index";

function App() {
  return (
    <>
      {/* main layout structure */}
      <div className="main-container">
        <HeroPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
