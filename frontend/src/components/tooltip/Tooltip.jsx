import "./tooltip.css";
import { Link } from "react-router-dom";

export default function Tooltip() {
  return (
    <section className="w-full fixed bottom-14 left-1/2 -translate-x-1/2 z-50">
      <div className="example-1">
        <div className="icon-content">
          <Link to="/" className="link" data-social="Home">
            <i className="fi fi-rr-home"></i>
          </Link>
          <div className="tooltip">Home</div>
        </div>

        <div className="icon-content">
          <Link
            to="https://github.com/surjanthakur"
            className="link"
            data-social="Github"
          >
            <i className="fa-brands fa-github"></i>
          </Link>
          <div className="tooltip">Github</div>
        </div>

        <div className="icon-content">
          <Link to="https://x.com/tsurjan16" className="link" data-social="x">
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
          <div className="tooltip">X</div>
        </div>

        <div className="icon-content">
          <Link className="link" data-social="Sun">
            <i className="fa-solid fa-sun"></i>
          </Link>
          <div className="tooltip">Change theme</div>
        </div>
      </div>
    </section>
  );
}
