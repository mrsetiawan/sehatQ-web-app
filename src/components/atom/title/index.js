import { React } from '../../../libraries'

const Title = ({ type, title }) => <h6 className={type === 'center' ? 'text-center text-dark font-weight-normal mb-0' : 'text-left text-dark font-weight-normal mb-0'}>{title}</h6>

export default Title
