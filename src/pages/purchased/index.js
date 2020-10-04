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

const Purchased = () => {
  const history = useHistory()
  const state = useSelector(state => state.listData.cart)
  
  return (
    <div className='d-flex flex-column justify-content-between'>
      <HelmetSection
        title='Purchased'
        desc='promo product'
      />
      <Header
        onClick={() => history.goBack()}
        title='Purchased'
      />
      {state.length === 0 ? (
        <ListEmpty title='belum ada yang dibeli' />
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

export default Purchased
