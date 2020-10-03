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
      return {
        ...state,
        list: { ...action.payload.result },
        loading: false
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