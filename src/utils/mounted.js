import {
  useRef,
  useEffect
} from '../libraries'

const useIsMounted = () => {
  const isMounted = useRef(true)
  useEffect(() => {
    isMounted.current = true
    return () => (isMounted.current = false)
  }, [])

  return isMounted
}

export default useIsMounted
