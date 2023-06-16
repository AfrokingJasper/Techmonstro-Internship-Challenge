import "./LandingView.css";

function LandingView() {
  return (
    <section className="landing__view">
      <div className=" overlay"></div>
      <div className="landing__view-content">
        <h1 className="landing__title">
          Checkmate Your Way to Chess Mastery: Unleash Your Strategic Genius!
        </h1>
        <div className="buttons__container">
          <a href="#about">Learn More</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
    </section>
  );
}

export default LandingView;
