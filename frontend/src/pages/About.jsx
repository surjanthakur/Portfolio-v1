// import myImage from "../../images/myimage.png";
import "./about.css";
import {
  react,
  js,
  db,
  fastapi,
  python,
  bun,
  image3,
} from "../../images/imgExport";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* IMAGE */}
        <div className="image-section">
          <img src={image3} alt="profile" />
        </div>

        {/* DETAILS */}
        <div className="details">
          <span className="about-label">About</span>
          <h2 className="about-title">Me</h2>

          <h1 className="name">Surjan Thakur</h1>

          <p className="description">
            I'm a Full Stack web developer and Open Source Contributor. I enjoy
            building products that solve real-world problems and specialize in
            crafting MVPs that ship fast and scale clean.
          </p>

          <div className="skills">
            <h3>Skills</h3>

            <div className="skills-icons">
              <img src={react} alt="React" />
              <img src={fastapi} alt="FastAPI" />
              <img src={db} alt="Database" />
              <img src={bun} alt="Bun" />
              <img src={js} alt="js" />
              <img src={python} alt="pytohn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
