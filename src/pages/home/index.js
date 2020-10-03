import {
  React,
  Fragment,
  useEffect,
  Helmet,
  useDispatch,
  useSelector,
  Row,
  Container,
  Col
} from '../../libraries'
import { Categories, Navigator } from '../../components'
import { getProductList } from '../../modules'

const Home = () => {
  const state = useSelector((state) => ({
    data: state.listData
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductList())
  }, [getProductList])

  console.log('list', state.data.list.category)

  return (
    <Fragment>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='product list dari sehatQ' />
      </Helmet>
      
      <Container>
        <Col>
          <Categories />
        </Col>
      </Container>

      <Navigator />
    </Fragment>
  )
}

export default Home
