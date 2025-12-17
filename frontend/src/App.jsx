import "./App.css";
import { HeroPage, NavBar, Footer } from "./components/index";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* main layout structure */}
      <div className="main-container">
        <HeroPage />
        <NavBar />
        <main className="flex-1 w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
