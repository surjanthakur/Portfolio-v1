import { useState, useEffect } from "react";
import axios from "axios";

export default function HeroPage() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getRandomQuotes = async () => {
      await axios.get("https://type.fit/api/quotes");
    };
  }, []);
  return (
    <div className="container">
      {/* random quotes call */}
      <div className="radm-quotes w-full h-48 bg-amber-400"></div>
      {/* image and contact section */}
      <div className="profile-pic flex  justify-between">
        <img alt="profile-image"></img>
        <button>contact me</button>
      </div>
      {/*intro about me */}
      <div className="about-intro mt-5">
        <h1>name: surjan thakur</h1>
        <div>work status</div>
        <div className="intro">
          <p>about: hy im surjan thakur im here</p>
        </div>
      </div>
    </div>
  );
}
