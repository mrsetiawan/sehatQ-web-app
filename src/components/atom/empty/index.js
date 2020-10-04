import { React } from '../../../libraries'
import Title from '../title'

const ListEmpty = ({ title }) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <Title title={title} />
    </div>
  )
}

export default ListEmpty
