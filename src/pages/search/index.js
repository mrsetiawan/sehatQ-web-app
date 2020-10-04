import { 
  React,
  useHistory,
  useLocation,
  useState,
  useEffect,
  FontAwesomeIcon,
  faArrowLeft
} from '../../libraries'
import { HelmetSection, InputForm, List } from '../../components'

const Search = () => {
  const { state } = useLocation()
  const [list, setList] = useState([])
  const [query, setQuery] = useState('')
  const history = useHistory()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    const result = state.filter(title =>
      title.title.toUpperCase().includes(query.toUpperCase())
    )
    setList(result)
  }, [query])

  return (
    <div className='d-flex flex-column justify-content-between'>
      <HelmetSection
        title='Search product'
        desc='search product'
      />
      <div className='d-flex flex-row justify-content-center align-items-center shadow-sm p-3'>
        <div className='flex-shrink-1 pr-3' onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size='lg' />
        </div>
        <div className='w-100 border border-black bg-primary rounded-pill bg-light'>
          <InputForm
            type='text'
            placeholder='search'
            value={query}
            rounded='rounded'
            onChange={handleChange} />
        </div>
      </div>
      <div className='d-flex flex-column justify-content-between p-3'>
        {list.map(item => {
          return <List key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default Search
