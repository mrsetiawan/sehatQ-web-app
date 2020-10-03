import { 
  React,
  Container,
  useLocation,
  FontAwesomeIcon,
  faHeart
} from '../../libraries'
import {
  Text,
  Title,
  Images
} from '../../components'
import { IFavDefault } from '../../assets'

const Detail = () => {

  const { state } = useLocation()
  
  return (
    <Container>
      <div className='d-flex flex-column border border-dark'>
        <Images
          type='category'
          image={state.imageUrl}
          title={state.title}
        />
      </div>
      <div className='d-flex flex-row justify-content-between py-3'>
        <Title title={state.title} />
        <img src={IFavDefault} alt='unfav' />
      </div>
      <Text text={state.description} />
    </Container>
  )
}

export default Detail
