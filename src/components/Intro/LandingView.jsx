import "./LandingView.css";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

function LandingView({ onblack, onwhite }) {
  // the destructured onblack and onwhite props was originally gotten from the generallayout
  // it was then passed to the intro section and passed down to LandingView section
  // its funtion is to change the theme of the webpage to from black to white and vise versa

  return (
    <section id="landing" className="landing__view">
      {/* the container below is an overlay which darkens the landing image a bit to make the intro texts more visible */}
      <div className=" overlay"></div>

      {/* main landing contents */}
      <div className="landing__view-content">
        <h1 className="landing__title">
          Checkmate Your Way to Chess Mastery: Unleash Your Strategic Genius!
        </h1>
        <div className="buttons__container">
          <a href="#about">Learn More</a>
          <a href="#gallery">Gallery</a>
        </div>
        <div className="background__change-btn">
          <button
            aria-label="Change Background"
            type="button"
            onClick={onblack}
          >
            <BsFillMoonFill />
          </button>
          <button
            aria-label="Change Background"
            type="button"
            onClick={onwhite}
          >
            <BsFillSunFill />
          </button>
        </div>
      </div>
    </section>
  );
}

export default LandingView;
