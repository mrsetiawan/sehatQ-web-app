import { 
  React,
  Card,
  useState,
  Container,
  Form,
  Button,
  useHistory,
  FontAwesomeIcon,
  faGoogle,
  faFacebookF,
  GoogleLogin,
  FacebookLogin,
  useGoogleLogin 
} from '../../libraries'
import { InputForm } from '../../components'
import { refreshTokenSetup } from '../../utils/refreshTokenSetup'

const Member = () => {
  const history = useHistory() 
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  
  const onSuccess = (response) => {
    refreshTokenSetup(response)
    return history.push('./home')
  }

  const onFailure = (response) => {
    console.log(response)
    return history.push('./home')
  }
  
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: '217805800732-7ea5onq5k8nquhqjq868iobh18tqde8o.apps.googleusercontent.com',
    isSignedIn: true,
    accessType: 'offline'
  })

  const responseFacebook = (response) => {
    console.log(response.accessToken)
    if (typeof window !== 'undefined' && window) {
      localStorage.setItem('tokenFacebook', response.accessToken)
    }
    return history.push('./home')
  }

  const componentClicked = (data) => {
    console.log('data', data)
  }

  return (
    <Container>
      <div className='d-flex flex-column justify-content-center align-items-center w-100 vh-100'>
        <Card className='shadow-sm p-3 w-100'>
          <h3 className='text-center font-weight-bold mb-3'>Login</h3>
          <InputForm
            placeholder='Username'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <InputForm
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className='d-flex flex-row justify-content-between mb-3'>
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Remeber me' />
            </Form.Group>
            <Button className='bg-secondary pl-3'>
              <p className='text-center mb-0'>Sign In</p>
            </Button>
          </div>
          <FacebookLogin
            appId='333842504359978'
            autoLoad={false}
            fields='name,email,picture'
            onClick={componentClicked}
            callback={responseFacebook}
            cssClass='my-facebook-button-class'
          />
          <Button className='bg-danger pl-3 mb-3' onClick={signIn}>
            <p className='text-center mb-0'>Sign In With Google</p>
          </Button>
        </Card>
      </div>
    </Container>
  )
}

export default Member
