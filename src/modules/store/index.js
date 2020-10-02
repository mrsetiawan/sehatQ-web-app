import { reduxThunk, createStore, applyMiddleware } from '../../libraries'
import { rootReducer } from '../reducer'

export const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk)
)