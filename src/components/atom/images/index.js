import { React, LazyLoadImage } from '../../../libraries'
import { INotFound } from '../../../assets'

const Images = ({ type, image, title }) => {

  const handleError = (event) => {
    event.target.src = INotFound
  }

  const loadImage = () => <p>masih load</p>

  return (
    <LazyLoadImage
      alt={title}
      src={image}
      onError={handleError}
      beforeLoad={loadImage}
      className={type === 'category' ? 'w-100 h-25' : 'img-product'}
    />
  )
}

export default Images
