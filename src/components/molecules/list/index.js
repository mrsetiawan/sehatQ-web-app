import { React } from '../../../libraries'
import { Text } from '../../atom'

const List = ({ item }) => {
  return (
    <div key={item.id} className='d-flex flex-row w-100 shadow-sm p-3 mb-3'>
      <div className='w-25 pr-3'>
        <img src={item.imageUrl} alt={item.title} className='img-list' />
      </div>
      <div className='d-flex flex-column'>
        <Text text={item.title} />
        <Text text={item.price} />
      </div>
    </div>
  )
}

export default List
