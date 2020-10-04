import { React, Link } from '../../../libraries'
import { Title, Text } from '../../atom'

const List = ({ item }) => {
  return (
    <Link to={{ pathname: '/detail', state: item }}>
      <div key={item.id} className='d-flex flex-row w-100 shadow-sm p-3 mb-3'>
        <div className='w-25 pr-3'>
          <img src={item.imageUrl} alt={item.title} className='img-list' />
        </div>
        <div className='d-flex flex-column'>
          <Title title={item.title} />
          <Text text={item.price} />
        </div>
      </div>
    </Link>
  )
}

export default List
