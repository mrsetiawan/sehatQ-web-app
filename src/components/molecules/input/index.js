import { React } from '../../../libraries'

const InputForm = ({ type, placeholder, value, onChange, rounded }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={rounded === 'rounded' ? 'w-100 p-2 mb-0 border-0 rounded-pill text-capitalize bg-light' : 'w-100 p-2 border-0 mb-0 text-capitalize bg-light'}
    />
  )
}

export default InputForm
