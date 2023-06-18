import { Fragment, useState } from "react";
import GalleryItems from "./GalleryItems";
import king from "../../assets/king.jpeg";
import queen from "../../assets/queen.jpg";
import castle from "../../assets/castle.jpg";
import bishop from "../../assets/red-bishop.jpg";
import kniht from "../../assets/landing-image.jpg";
import pawn from "../../assets/pawn.jpg";
import GalleryItem from "./GalleryItem";

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
      "The queen is the most powerful piece in chess. It can move any number of squares in any direction.",
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

function Gallery() {
  const [view, setView] = useState(false);
  const [data, setData] = useState({
    id: "",
    title: "",
    image: "",
    description: "",
  });

  // the setViewHander function is meant to help change the state of the DATA to the item that was clicked in the GalleryItems
  // and that DATA can then be passed to the GalleryItem
  // the state of that DATA changes on every click to the recently clicked item
  // this function also sets the state of VIEW to true and displays the single item that was clicked
  const setViewHandler = (item) => {
    setData({
      id: item.title,
      title: item.title,
      image: item.img,
      description: item.description,
    });
    setView(!view);
  };

  // this function also sets the state of VIEW to false and takes the use back to the main gallery
  const hideViewHandler = () => {
    setView(!view);
  };
  return (
    <Fragment>
      {!view && (
        <GalleryItems onShowView={setViewHandler} galleryItems={galleryItems} />
      )}
      {view && <GalleryItem item={data} onHideView={hideViewHandler} />}
    </Fragment>
  );
}

export default Gallery;
