import { React } from '../../../libraries'

const Title = ({ type, title }) => <p className={type === 'center' ? 'text-center mb-0' : 'text-left font-weight-bold mb-0'}>{title}</p>

export default Title
