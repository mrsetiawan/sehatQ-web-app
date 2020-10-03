import {
  reduxThunk,
  createStore,
  compose,
  applyMiddleware
} from '../../libraries'
import { rootReducer } from '../reducer'

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)