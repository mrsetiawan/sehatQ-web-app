import { 
  React,
  useHistory,
  useLocation,
  useEffect,
  useState,
  FontAwesomeIcon,
  faArrowLeft
} from '../../libraries'
import { InputForm, List } from '../../components'

const Search = () => {
  const { state } = useLocation()
  const [list] = useState(state)
  const [query, setQuery] = useState('')
  const history = useHistory()

  return (
    <div className='d-flex flex-column justify-content-between'>
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
            onChange={(e) => setQuery(e.target.value)} />
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
