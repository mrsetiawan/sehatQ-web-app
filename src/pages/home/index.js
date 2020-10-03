import {
  React,
  Fragment,
  useEffect,
  Helmet,
  useDispatch,
  useSelector,
  Row,
  Container,
  Col,
  Link,
  FontAwesomeIcon,
  faHeart
} from '../../libraries'
import {
  Categories,
  Title,
  Text,
  Navigator,
  LoadingScreen,
  CardList
} from '../../components'
import { getProductList } from '../../modules'

const Home = () => {
  const state = useSelector((state) => ({
    data: state.listData
  }))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductList())
  }, [getProductList])
  
  return (
    <Fragment>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='product list dari sehatQ' />
      </Helmet>

      <div className='d-flex flex-column justify-content-between'>
        <div>
          {state.data.loading && Object.keys(state.data.list).length === 0 ? (
            <LoadingScreen count='5' duration='20' />
          ) : (
            <Categories list={state.data.list.category} />
          )}

          <Container>
            {state.data.list && state.data.list.length === 0 ? (
              <LoadingScreen count='5' duration='20' />
            ) : (
              <div className='py-3 mb-5'>
                {state.data.list.productPromo && state.data.list.productPromo.map(item => {
                  return (
                    <div key={item.id} className='d-flex flex-column'>
                      <div className='border border-dark position-relative'>
                        <img src={item.imageUrl} className='img-product' />
                        <div className='wishlist'>
                          {item.loved === 1 ? (
                            <FontAwesomeIcon icon={faHeart} size='lg' style={{ color: '#dc3545' }} />
                          ) : (
                            <FontAwesomeIcon icon={faHeart} size='lg' style={{ color: 'yellow' }} />
                          )}
                        </div>
                      </div>
                      <Link to={{ pathname: '/detail', state: item }}>
                        <p className='mb-0 py-2 px-1'>{item.title}</p>
                      </Link>
                    </div>
                  )
                })}
              </div>
            )}
          </Container>
        </div>
        <div>
          <Navigator />
        </div>
      </div>
    </Fragment>
  )
}

export default Home

{/* <Link to={{ pathname: '/detail', state: item }}>
  <CardList item={item} type='product' />
</Link> */}