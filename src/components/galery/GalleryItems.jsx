import "./GalleryItems.css";
import king from "../../assets/king.jpeg";
import queen from "../../assets/queen.jpg";
import castle from "../../assets/castle.jpg";
import bishop from "../../assets/red-bishop.jpg";
import kniht from "../../assets/landing-image.jpg";
import pawn from "../../assets/pawn.jpg";

const galleryItems = [
  {
    title: "King",
    img: king,
    about: "lorem lorem",
  },
  {
    title: "Queen",
    img: queen,
    about: "lorem lorem",
  },
  {
    title: "Castle",
    img: castle,
    about: "lorem lorem",
  },
  {
    title: "Bishop",
    img: bishop,
    about: "lorem lorem",
  },
  {
    title: "Knight",
    img: kniht,
    about: "lorem lorem",
  },
  {
    title: "Pawn",
    img: pawn,
    about: "lorem lorem",
  },
];

function GalleryItems() {
  return (
    <section id="gallery" className="gallery__section">
      <div className="gallery__content">
        <h1>Gallery</h1>
        <ul className="gallery__grid">
          {galleryItems.map((items) => (
            <li key={items.img}>
              <img src={items.img} alt={items.title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GalleryItems;
