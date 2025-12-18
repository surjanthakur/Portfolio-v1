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

          <h1 className="name">
            <span className="text-gray-400">👋🏻 hy i'm </span>Surjan Thakur
          </h1>

          <p className="description">
            I'm a Full Stack web developer and Open Source Contributor. I enjoy
            building products that solve real-world problems and specialize in
            crafting MVPs that ship fast and scale clean.
          </p>

          <div className="skills">
            <h3>Skills</h3>

            <div className="skills-icons">
              <div className="icon-content">
                <img src={react} alt="React" />
                <div className="tooltip">React</div>
              </div>

              <div className="icon-content">
                <img src={fastapi} alt="FastAPI" />
                <div className="tooltip">Fastapi</div>
              </div>

              <div className="icon-content">
                <img src={db} alt="Database" />
                <div className="tooltip">PostgreSql</div>
              </div>

              <div className="icon-content">
                <img src={bun} alt="Bun" />
                <div className="tooltip">Bun</div>
              </div>

              <div className="icon-content">
                <img src={js} alt="js" />
                <div className="tooltip">JavaScript</div>
              </div>

              <div className="icon-content">
                <img src={python} alt="python" />
                <div className="tooltip">Python</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
