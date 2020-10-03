import { api, appConstants } from '../../helpers'

export const getProductList = () => {
  return dispatch => {
    dispatch(productRequest())
    api.get('home')
      .then(response => dispatch(productSuccess(response.data[0].data)))
      .catch(err => dispatch(productFailed(err.response)))
  }
}

const productRequest = () => ({
  type: appConstants.GET_LIST_PRODUCT_REQUEST
})

const productSuccess = (result) => ({
  type: appConstants.GET_LIST_PRODUCT_SUCCESS,
  payload: { result }
})

const productFailed = (message) => ({
  type: appConstants.GET_LIST_PRODUCT_FAILED,
  payload: { message }
})