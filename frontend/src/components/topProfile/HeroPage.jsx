import { useEffect, useState } from "react";
import profileImg from "../../../images/myimage.png";
import "./heropage.css";

export default function HeroPage() {
  const [quotes, setQuotes] = useState([]);

  const url =
    "https://api.api-ninjas.com/v2/quotes?categories=success%2Cwisdom";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-Api-Key": "vJrdDt31z1Uj/rOmCKFj+g==uRMw9c9hDxu0CXJH",
    },
  };

  useEffect(() => {
    const getRandomQuotes = async () => {
      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data[0]);
        setQuotes(data[0]);
      } catch (err) {
        console.error("quote fetch failed", err);
      }
    };

    getRandomQuotes();
  }, []);

  return (
    <div className="w-full">
      {/* TOP BACKGROUND  */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/bd/90/a6/bd90a6c8ea07dc7390e461b655a8b1c6.jpg"
          alt="background"
          className="h-full w-full object-cover opacity-15"
        />
        {/* RANDOM QUOTE */}
        <div className="absolute bottom-18! left-4! right-4! mx-auto! max-w-2xl! text-center px-6! py-5!">
          <p className="text-lg md:text-xl font-serif italic text-gray-100 leading-relaxed">
            {quotes?.quote}
          </p>
        </div>
      </div>

      {/* ================= PROFILE ROW ================= */}
      <div className="relative px-6">
        {/* PROFILE IMAGE */}
        <div className="absolute -top-16 left-6">
          <img
            src={profileImg}
            alt="profile"
            className="h-36 w-36 rounded-full border-4 border-black"
          />
        </div>

        {/* CONTACT BUTTON */}
        <div className="flex justify-end mr-2! mt-2!">
          <button className="contact-btn text-center px-2! py-2!">
            <i class="fi fi-rs-paper-plane"></i> Get in Touch
          </button>
        </div>
      </div>

      {/* ================= INFO SECTION ================= */}
      <div className="mt-10! px-6!">
        {/* NAME */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Surjan Thakur</h1>
          <button className="work-status">
            <span>open to work</span>
          </button>
        </div>
        {/* META */}
        <div className="flex text-sm! text-gray-500">
          <span>
            <i className="fi fi-rs-land-layer-location"></i>
            &nbsp;India
          </span>
        </div>
        {/* ABOUT */}
        <div className="mt-4! p-4">
          <p className="text-lg text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iste
            eveniet placeat sequi veritatis nam, debitis similique nostrum
            dolores? Deserunt, laudantium nesciunt? Quia suscipit soluta
            incidunt aperiam quo iure quibusdam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vero impedit eius neque quia nulla
            quos laudantium, eum pariatur alias rerum reprehenderit nesciunt est
            magni atque suscipit dolores ad. Obcaecati, fugit? Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Magni, omnis quas
            pariatur delectus ipsa laboriosam soluta recusandae molestiae,
            maxime placeat, eaque unde debitis sit! Sit optio fuga magni
            accusantium quia?
          </p>
        </div>
      </div>
    </div>
  );
}
