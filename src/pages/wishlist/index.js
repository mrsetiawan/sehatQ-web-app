import { 
  React,
  useSelector,
  useHistory,
  Container
} from '../../libraries'
import { 
  HelmetSection,
  Header,
  ListEmpty,
  List
} from '../../components'

const Wishlist = () => {
  const history = useHistory()
  const state = useSelector(state => state.listData.wishlist)
  
  return (
    <div className='d-flex flex-column justify-content-between'>
      <HelmetSection
        title='Wishlist'
        desc='wishlist'
      />
      <Header
        onClick={() => history.goBack()}
        title='Wishlilst'
      />
      {state.length === 0 ? (
        <ListEmpty title='belum ada wishlist' />
      ) : (
        <Container>
          <div className='d-flex flex-column justify-content-between'>
            {state.map(item => {
              return <List key={item.id} item={item} />
            })}
          </div>
        </Container>
      )}
    </div>
  )
}

export default Wishlist
