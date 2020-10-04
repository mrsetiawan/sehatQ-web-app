import {
  React,
  Fragment,
  useEffect,
  Helmet,
  useDispatch,
  useSelector,
  Container,
  Link,
  useHistory
} from '../../libraries'
import {
  Categories,
  Navigator,
  LoadingScreen
} from '../../components'
import { getProductList } from '../../modules'
import { IFavDefault, IFavActive } from '../../assets'
import { useIsMounted } from '../../utils'

const Home = () => {
  const history = useHistory()
  const isMounted = useIsMounted()
  const state = useSelector((state) => ({
    data: state.listData
  }))
  const dispatch = useDispatch()

  const onSearch = () => history.push({
    pathname: '/search',
    state: state.data.list.productPromo
  })

  useEffect(() => {
    isMounted && dispatch(getProductList())
  }, [isMounted])
  
  return (
    <Fragment>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='product list dari sehatQ' />
      </Helmet>

      <div className='d-flex flex-column justify-content-between'>
        <div className='d-flex flex-row justify-content-center align-items-center shadow-sm p-3 mb-3'>
          <div className='flex-shrink-1 pr-3'>
            <img src={IFavDefault} alt='fav' />
          </div>
          <div className='w-100 border border-black bg-primary rounded-pill bg-light' onClick={onSearch}>
            <p className='p-2 mb-0 text-dark'>search</p>
          </div>
        </div>
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
                    <div key={item.id} className='d-flex flex-column shadow mb-3'>
                      <Link to={{ pathname: '/detail', state: item }}>
                        <div className='position-relative'>
                          <img src={item.imageUrl} className='img-product' />
                          <div className=' wishlist'>
                            {item.loved === 1 ? (
                              <img src={IFavActive} alt='unfav' className='w-100' />
                            ) : (
                              <img src={IFavDefault} alt='fav' className='w-100' />
                            )}
                          </div>
                        </div>
                        <p className='mb-0 py-3 px-2'>{item.title}</p>
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
