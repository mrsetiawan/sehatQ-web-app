import { 
  React,
  Container,
  FontAwesomeIcon,
  faHome,
  useEffect,
  loadable
} from './libraries'
import './App.css'
import { LoadingScreen } from './components'
const App = () => {

  const Home = loadable(() => import('./pages/home'))

  return (
    <Home />
  )
}

export default App
{/* <FontAwesomeIcon icon={faHome} />
      <LoadingScreen count='3' duration='1' /> */}