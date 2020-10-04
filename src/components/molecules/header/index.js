import { React, FontAwesomeIcon, faArrowLeft } from '../../../libraries'
import { Title } from '../../atom'

const Header = ({ onClick, title }) => {
  return (
    <div className='d-flex flex-row justify-content-center align-items-center shadow-sm p-3 mb-3'>
      <div className='flex-shrink-1' onClick={onClick}>
        <FontAwesomeIcon icon={faArrowLeft} size='lg' />
      </div>
      <div className='w-100'>
        <Title title={title} type='center' />
      </div>
    </div>
  ) 
}

export default Header
