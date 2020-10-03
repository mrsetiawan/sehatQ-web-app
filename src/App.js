import { 
  React,
  Container,
  FontAwesomeIcon,
  faHome,
  Switch,
  Route,
  loadable
} from './libraries'
import './App.css'

const App = () => {
  const Home = loadable(() => import('./pages/home'))
  const Member = loadable(() => import('./pages/member'))
  const Detail = loadable(() => import('./pages/detail'))

  return (
    <Switch>
      <Route path='/' exact component={Member} />
      <Route path='/home' exact component={Home} />
      <Route path='/detail' exact component={Detail} />
    </Switch>
  )
}

export default App
{/* <FontAwesomeIcon icon={faHome} />
      <LoadingScreen count='3' duration='1' /> */}