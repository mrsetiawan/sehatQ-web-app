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
  HelmetSection,
  Text,
  Title,
  Images,
  ToastAlert
} from '../../components'
import { IheartSolid, IheartRegular } from '../../assets'
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
      <HelmetSection
        title={`Detail - ${state.title}`}
        desc={state.description}
      />
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
        <div>
          <Title title={state.title} />
        </div>
        {loved === 0 ? (
          <div className='w-10' onClick={addToWishlist}>
            <img src={IheartRegular} alt='fav' className='w-75' />
          </div>
        ) : (
          <div className='w-10'>
            <img src={IheartSolid} alt='fav' className='w-75' />
          </div>
        )}
      </div>
      <div className='mb-5'>
        <Text text={state.description} />
      </div>
      <div className='d-flex flex-row justify-content-between fixed-bottom bg-dark p-3'>
        <div className='align-self-center'>
          <p className='text-light font-wight-bold mb-0'>Price : <span>{state.price}</span></p>
        </div>
        <div className='w-50'>
          <Button className='bg-primary w-100' onClick={addToCart}>Buy</Button>
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
