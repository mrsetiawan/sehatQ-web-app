import { combineReducers } from '../../libraries'
import { appConstants } from '../../helpers'

const initialState = {
  list: {},
  loading: true,
  error: null
}

const listData = (state = initialState, action) => {
  switch (action.type) {
    case appConstants.GET_LIST_PRODUCT_SUCCESS :
      console.log('reducer', action.payload.result)
      return {
        ...state,
        loading: false,
        list: { ...action.payload.result }
      }
    case appConstants.GET_LIST_PRODUCT_REQUEST :
      return {
        ...state,
        loading: !state.loading
      }
    case appConstants.GET_LIST_PRODUCT_FAILED :
      return {
        ...state,
        error: action.payload.message
      }
    default :
      return state
  }
}

export const rootReducer = combineReducers({ listData })