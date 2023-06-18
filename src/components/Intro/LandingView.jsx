import "./LandingView.css";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

function LandingView({ onblack, onwhite }) {
  return (
    <section id="landing" className="landing__view">
      <div className=" overlay"></div>
      <div className="landing__view-content">
        <h1 className="landing__title">
          Checkmate Your Way to Chess Mastery: Unleash Your Strategic Genius!
        </h1>
        <div className="buttons__container">
          <a href="#about">Learn More</a>
          <a href="#gallery">Gallery</a>
        </div>
        <div className="background__change-btn">
          <button onClick={onblack}>
            <BsFillMoonFill />
          </button>
          <button onClick={onwhite}>
            <BsFillSunFill />
          </button>
        </div>
      </div>
    </section>
  );
}

export default LandingView;
