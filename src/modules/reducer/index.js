import { combineReducers } from '../../libraries'

const initialState = {
  data: [],
  loading: true,
  error: null
}

const listData = (state = initialState, action) => {

}

export const rootReducer = combineReducers({ listData })