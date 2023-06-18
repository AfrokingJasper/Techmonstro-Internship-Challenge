import "./GalleryItem.css";

// 1)
// onn the onHideVoew funtion was gotten from the parent element (Gallery).
//  And its function is to set the VIEW to false and return to the main gallery section

// 2)
// the ITEM was passed as a prop from the parent container
// it contains the details of the exact item that was clicked in the GallrtyItems section
// that item was passed down to the parent container and then transfered to this container as a prop

function GalleryItem({ onHideView, item }) {
  return (
    <article className="gallery__item-container">
      <div className="single__image-view">
        <img src={item.image} alt={item.image} />
      </div>
      <div className="about__item">
        <h1>About the {item.title}</h1>
        <span>{item.description}</span>
        <button className="about__item-button" onClick={onHideView}>
          Back
        </button>
      </div>
    </article>
  );
}

export default GalleryItem;
