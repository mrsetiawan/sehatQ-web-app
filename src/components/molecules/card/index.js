import { React, Card } from '../../../libraries'
import { Images, Title } from '../../atom'

const CardList = ({ type, item }) => {
  return (
    <div className='d-flex flex-column'>
      <Card className='w-100'>
        <Images
          type='category'
          image={item.imageUrl}
          title={item.name}
        />
      </Card>
      <Title title={item.name} type='center' />
      <Title title={item.title} />
    </div>
  )
}

export default CardList
