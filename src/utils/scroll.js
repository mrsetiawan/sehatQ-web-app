import {
  useLocation,
  useEffect
} from '../libraries'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default ScrollToTop
