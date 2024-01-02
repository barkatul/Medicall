import Header from "../../components/Header";
import HeaderImage from "../../images/pexels-pixabay-208512.jpg";
import './gallery.css';

const Gallery = () => {

  const galleryLength = 8;
  const images = []

  for(let i = 0; i < galleryLength; i++){
    images.push(require(`../../images/gallery/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
      Step into our gallery at Paradise Medicall to visually experience the essence of compassionate healthcare. Discover moments that reflect our commitment to your well-being.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery