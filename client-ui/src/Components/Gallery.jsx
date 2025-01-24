import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import '../Stylesheet/image.css';  

const Gallery = ({images}) => {
  

const galleryimages = images && images.map(image => ({
  original: image,
  thumbnail: image,
}))
  return (
   
      <ImageGallery items={galleryimages} showFullscreenButton={true} />
   
  )
}

export default Gallery





