import { React } from '../../../libraries'
import { INotFound } from '../../../assets'

const Images = ({ type, image, title }) => {

  const handleError = (event) => {
    event.target.src = INotFound
  }

  return (
    <img
      alt={title}
      src={image}
      onError={handleError}
      className={type === 'category' ? 'w-100 h-25' : 'img-product'}
    />
  )
}

export default Images
