import "./App.css";
import {
  HeroPage,
  NavBar,
  StreakStatus,
  Footer,
  InfiniteScroll,
} from "./components/index";

function App() {
  return (
    <>
      <div className="main-container">
        <HeroPage />
        <StreakStatus />
        <InfiniteScroll />
        <Footer />
      </div>
    </>
  );
}

export default App;
