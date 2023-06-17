import "./GalleryItems.css";

// 1)
// the galleryItems was passsed as a prop from the parent component (Gallery)
// it contains an array of items that are meant to be displayed on the gallery section of this web page

// 2)
// the on showView is a funtion from the parent element (Gallery)
// its its funtion is to set the VIEW to true and enable users view a particular image in a single large format  when clicked
//  it also recieves the gallery item that was clicked and pass it up to the parent container which later passes it down to the GalleryItem
function GalleryItems({ galleryItems, onShowView }) {
  return (
    <section id="gallery" className="gallery__section">
      <div className="gallery__content">
        <h1>Gallery</h1>
        <ul className="gallery__grid">
          {galleryItems.map((items) => (
            <li key={items.img}>
              <div className="gallery__image-container">
                <img src={items.img} alt={items.title} />
                <div
                  onClick={() => {
                    onShowView(items);
                  }}
                  className="gallery__overlay"
                >
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
