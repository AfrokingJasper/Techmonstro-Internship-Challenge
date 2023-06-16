import "./About.css";
import chessImg from "../../assets/playing-chess-1.jpg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about__container">
        <h1>About Chess</h1>
        <div className="about__content">
          <img
            className="about__image"
            src={chessImg}
            alt="two people playing chess"
          />
          <p>
            Chess is a timeless and intellectually stimulating board game played
            on a square board. It involves strategic thinking, critical
            analysis, and foresight to checkmate the opponent's king. With
            unique piece movements and complex gameplay, chess challenges
            players to make decisions based on positional understanding and
            long-term planning. It is recognized as a competitive sport,
            produced legendary players, and has influenced artificial
            intelligence development. Chess is not only a game but also an art
            form that inspires creativity and fascination. It remains a beloved
            pastime worldwide, symbolizing intellect, strategy, and the endless
            possibilities of the human mind.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
