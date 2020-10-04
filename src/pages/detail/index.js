import { 
  React,
  Container,
  useLocation,
  useHistory,
  useDispatch,
  useState,
  FontAwesomeIcon,
  faArrowLeft,
  Button,
  faShareAltSquare
} from '../../libraries'
import {
  Text,
  Title,
  Images,
  ToastAlert
} from '../../components'
import { IFavDefault, IFavActive } from '../../assets'
import { addWishlist, addCart } from '../../modules'

const Detail = () => {
  const { state } = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const [loved, setLoved] = useState(0)
  const [show, setShow] = useState(false)
  
  const addToWishlist = () => {
    setLoved(state.loved + 1)
    setShow(!show)
    const select = { ...state }
    loved === 0 && dispatch(addWishlist(select))
  }

  const addToCart = () => {
    setShow(!show)
    const select = { ...state }
    dispatch(addCart(select))
  }
  return (
    <Container className='py-3 mb-5'>
      <div className='d-flex flex-column shadow mb-3'>
        <div className='position-relative'>
          <Images
            type='category'
            image={state.imageUrl}
            title={state.title}
          />
          <div className='share'>
            <div onClick={() => history.goBack()}>
              <FontAwesomeIcon icon={faArrowLeft} size='lg' />
            </div>
            <FontAwesomeIcon icon={faShareAltSquare} size='lg' />
          </div>
        </div>
      </div>
      <div className='d-flex flex-row justify-content-between py-3'>
        <Title title={state.title} />
        {loved === 0 ? (
          <div onClick={addToWishlist}>
            <img src={IFavDefault} alt='unfav' className='w-100' />
          </div>
        ) : (
          <div>
            <img src={IFavActive} alt='fav' className='w-100' />
          </div>
        )}
      </div>
      <div>
        <Text text={state.description} />
      </div>
      <div className='d-flex justify-content-end'>
        <Text text={state.price} />
        <div className='w-25 pl-3'>
          <Button className='bg-secondary w-100 pl-3' onClick={addToCart}>Buy</Button>
        </div>
      </div>
      <ToastAlert
        title='Success'
        show={show}
        onClose={() => setShow(!show)}
      />
    </Container>
  )
}

export default Detail
