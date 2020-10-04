import {
  React,
  Switch,
  Route,
  loadable
} from './libraries'
import './App.css'

const App = () => {
  const Home = loadable(() => import('./pages/home'))
  const Member = loadable(() => import('./pages/member'))
  const Detail = loadable(() => import('./pages/detail'))
  const Search = loadable(() => import('./pages/search'))
  const Wishlist = loadable(() => import('./pages/wishlist'))
  const Purchased = loadable(() => import('./pages/purchased'))
  
  return (
    <Switch>
      <Route path='/home' exact component={Home} />
      <Route path='/detail' exact component={Detail} />
      <Route path='/search' exact component={Search} />
      <Route path='/wishlist' exact component={Wishlist} />
      <Route path='/purchased' exact component={Purchased} />
      <Route path='/' exact component={Member} />
    </Switch>
  )
}

export default App
