import {
  React,
  Fragment,
  useEffect,
  useDispatch,
  useSelector,
  Container,
  Link,
  useHistory
} from '../../libraries'
import {
  HelmetSection,
  Categories,
  Navigator,
  LoadingScreen,
  Images,
  Title
} from '../../components'
import { getProductList } from '../../modules'
import { IFavDefault, IheartSolid, IheartRegular } from '../../assets'
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
      <HelmetSection
        title='Home'
        desc='product list dari sehatQ'
      />
      <div className='d-flex flex-column justify-content-between'>
        <div className='d-flex flex-row justify-content-center align-items-center position-sticky shadow-sm p-3 mb-3'>
          <div className='flex-shrink-1 pr-3'>
            <img src={IFavDefault} alt='fav' />
          </div>
          <div className='w-100 border border-black bg-primary rounded-pill bg-light' onClick={onSearch}>
            <p className='p-2 mb-0 text-dark'>search</p>
          </div>
        </div>
        <div>
          {Object.keys(state.data.loading) && (
            <Fragment>
              <Categories list={state.data.list.category && state.data.list.category} />
            
            </Fragment>
          )}
          <Container>
            {Object.keys(state.data.loading) && (
              <div className='py-3 mb-5'>
                {state.data.list.productPromo && state.data.list.productPromo.map(item => {
                  return (
                    <div key={item.id} className='d-flex flex-column shadow mb-3'>
                      <Link to={{ pathname: '/detail', state: item }}>
                        <div className='position-relative'>
                          <Images image={item.imageUrl || <LoadingScreen />} />
                          <div className=' wishlist'>
                            {item.loved === 1 ? (
                              <img src={IheartRegular || <LoadingScreen />} alt='unfav' className='w-75' />
                            ) : (
                              <img src={IheartSolid || <LoadingScreen />} alt='fav' className='w-75' />
                            )}
                          </div>
                        </div>
                        <div className='p-3'>
                          <Title title={item.title || <LoadingScreen />} />
                        </div>
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
