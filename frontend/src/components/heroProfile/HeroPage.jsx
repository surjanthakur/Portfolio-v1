import "./heropage.css";
import profileImg from "../../../images/myimage.png";
import { fastapi, bun, db, react, tailwind } from "../../../images/imgExport";
import { StreakStatus, InfiniteScroll } from "../index";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroPage() {
  const [quotes, setQuotes] = useState([]);

  // email logic
  const openMail = () => {
    const myEmail = "tsurjan506@gmail.com";
    const subject = "Contact from Portfolio";
    const body =
      "Hi Surjan,\n\nI want to connect with you.\n\nPlease enter your email:";

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      myEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank");
  };

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
    <>
      <div className="w-full">
        {/* TOP BACKGROUND  */}
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src="https://i.pinimg.com/1200x/bd/90/a6/bd90a6c8ea07dc7390e461b655a8b1c6.jpg"
            alt="background"
            className="h-full w-full object-cover opacity-25"
          />
          {/* RANDOM QUOTE */}
          <div className="absolute bottom-14! left-3! right-3! mx-auto max-w-2xl text-center px-3! py-3! sm:px-6! sm:py-5!">
            <p className="text-base sm:text-lg! md:text-xl! font-serif italic text-gray-100 leading-relaxed">
              {quotes?.quote}
            </p>
          </div>
        </div>

        {/* ================= PROFILE ROW ================= */}
        <div className="relative px-6!">
          {/* PROFILE IMAGE */}
          <div className="absolute -top-12! sm:-top-16! left-4 sm:left-6!">
            <img
              src={profileImg}
              alt="profile"
              className="h-24 w-24 sm:h-36! sm:w-36! rounded-full border-4! border-black"
            />
          </div>

          {/* CONTACT BUTTON */}
          <div className="flex justify-end mr-2! mt-2!">
            <button
              onClick={openMail}
              className="contact-btn text-sm sm:text-base! px-3! py-2! sm:px-4! sm:py-2!"
            >
              <i className="fi fi-rs-paper-plane"></i> Get in Touch
            </button>
          </div>
        </div>

        {/* ================= INFO SECTION ================= */}
        <div className="mt-10! px-6!">
          {/* NAME  -------------------------------->*/}
          <section className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl sm:text-4xl! font-extrabold text-gray-400">
              Surjan Thakur
            </h1>
            <button className="work-status scale-75 sm:scale-100!"></button>
          </section>

          {/* META */}
          <section className="flex  text-lg sm:text-lg!">
            <span>
              <i className="fi fi-rs-land-layer-location"></i>
              &nbsp;India
            </span>
            <Link className="icon-content" to="https://x.com/tsurjan16">
              <i className="fa-brands fa-x-twitter social-link"></i>
              <div className="tooltip">x</div>
            </Link>
            <Link className="icon-content" to="https://github.com/surjanthakur">
              <i className="fa-brands fa-github social-link"></i>
              <div className="tooltip">Github</div>
            </Link>
            <Link
              className="icon-content"
              to="https://www.instagram.com/epicsurjanthakur/"
            >
              <i class="fa-brands fa-instagram social-link"></i>
              <div className="tooltip">Instagram</div>
            </Link>
          </section>

          {/* ABOUT ----------------------------------------------------------------->*/}
          <section className="mt-3! sm:mt-6! p-3! sm:p-6!">
            <h1 className="hero-title text-2xl sm:text-4xl! leading-tight">
              <span className="name">Hi, I’m</span> —{" "}
              <span className="muted">A Full Stack web developer.</span>
            </h1>

            <p className="hero-subtitle mt-3! text-sm! sm:text-base! leading-relaxed">
              <span className="text-white font-extrabold"> I build </span>{" "}
              efficient web apps using
              <span className="badges flex flex-wrap gap-2 mt-2!">
                <span className="badge flex items-center gap-1 px-2! py-1! text-xs! sm:text-sm!">
                  <img className="h-5 w-5" src={fastapi} alt="fastapi"></img>
                  Fastapi
                </span>

                <span className="badge">
                  {" "}
                  <img className="h-5 w-5" src={react} alt="react"></img>React
                </span>

                <span className="badge">
                  <img className="h-5 w-5" src={tailwind} alt="tailwind"></img>
                  Tailwind
                </span>
                <span className="badge">
                  {" "}
                  <img className="h-5 w-5" src={bun} alt="bun"></img>Bun
                </span>
              </span>
              and{" "}
              <span className="badge">
                <img className="h-5 w-5" src={db} alt="db"></img>Bun PostgreSQL
              </span>{" "}
              to build fast, <strong>and reliable web apps.</strong> and I’m
              deeply interested in{" "}
              <strong className="text-white">🤖AI agents</strong> — and
              <strong className="text-white"> intelligent systems</strong>
            </p>
          </section>
        </div>
        {/* github contributions */}
        <StreakStatus />
        {/* infinite tech stack scroll */}
        <InfiniteScroll />
      </div>
    </>
  );
}
