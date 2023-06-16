import "./GalleryItems.css";
import king from "../../assets/king.jpeg";
import queen from "../../assets/queen.jpg";
import castle from "../../assets/castle.jpg";
import bishop from "../../assets/red-bishop.jpg";
import kniht from "../../assets/landing-image.jpg";
import pawn from "../../assets/pawn.jpg";
import { useState } from "react";

const galleryItems = [
  {
    title: "King",
    img: king,
    about:
      "The king is the most important piece in chess. Its objective is to avoid capture and stay safe.",
    description:
      "The king is the most important piece in chess. Its objective is to avoid capture and stay safe. It can move one square in any direction: horizontally, vertically, or diagonally. If the king is attacked and cannot escape capture, it is in check. If there is no way to remove the threat, it is in checkmate, resulting in a loss. The king's protection is crucial, and strategies revolve around defending it while attacking the opponent's king. Castling is a special move that allows the king to move two squares towards a rook. Overall, the king's role is to be safeguarded and contribute to the game's strategic positioning.",
  },
  {
    title: "Queen",
    img: queen,
    about:
      "The queen is the most powerful piece in chess. It can move any number of squares in any direction",
    description:
      "The queen is the most powerful piece in chess. It can move any number of squares in any direction: horizontally, vertically, or diagonally. The queen is a versatile and influential piece, capable of attacking and capturing enemy pieces from long distances. It plays a crucial role in offense, defense, and strategic maneuvers on the chessboard. Its strength and mobility make it a valuable asset in the game.",
  },
  {
    title: "Rook",
    img: castle,
    about:
      "The rook is a key piece in chess. It moves horizontally and vertically in straight lines, covering long distances on the board.",
    description:
      "The rook is a key piece in chess. It moves horizontally and vertically in straight lines, covering long distances on the board. Rooks are versatile and can be used for offense and defense. They are involved in strategic maneuvers, controlling open files, and supporting other pieces. Rooks play a vital role in the endgame. Castling is a special move involving the rook and the king for safety and activation. Their ability to control ranks and files makes them valuable assets in chess.",
  },
  {
    title: "Bishop",
    img: bishop,
    about:
      "Bishops are powerful pieces in chess. They move diagonally across the board and can control long diagonals.",
    description:
      "Bishops are powerful pieces in chess. They move diagonally across the board and can control long diagonals. Each player starts with two bishops, positioned on light and dark squares. Bishops excel in open positions where they have unobstructed paths. They can attack, capture, and control important squares. Bishops contribute to tactics, positional play, and can be valuable assets in the game.",
  },
  {
    title: "Knight",
    img: kniht,
    about:
      "The knight is a distinctive chess piece. It moves in an `L` shape, jumping over other pieces.",
    description:
      "The knight is a distinctive chess piece. It moves in an `L` shape, jumping over other pieces. Knights are tactically strong, capable of executing powerful maneuvers and attacking without being threatened directly. They control central squares and can support other pieces. Knights are effective in closed positions and excel in creating threats and unique patterns on the board. Mastering knight tactics is important for chess strategy.",
  },
  {
    title: "Pawn",
    img: pawn,
    about:
      "Pawns are essential chess pieces. They move forward one square at a time.",
    description:
      "Pawns are essential chess pieces. They move forward one square at a time, capture diagonally, and can initially move two squares. Pawns control the center, create pawn chains, and influence the position. Promotion allows a pawn to become a more powerful piece. Pawns play a role in tactics like en passant and are crucial in the endgame. Understanding pawn structure is key to strategic play.",
  },
];

function GalleryItems() {
  // const [view, setView] = useState(true);

  return (
    <section id="gallery" className="gallery__section">
      <div className="gallery__content">
        <h1>Gallery</h1>
        <ul className="gallery__grid">
          {galleryItems.map((items) => (
            <li key={items.img}>
              <div className="gallery__image-container">
                <img src={items.img} alt={items.title} />
                <div className="gallery__overlay">
                  <p>{items.title}</p>
                  <p>{items.about}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GalleryItems;
