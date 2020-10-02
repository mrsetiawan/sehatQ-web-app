import { axios } from '../../libraries'

const api = axios.create({
  baseURL: 'https://private-4639ce-ecommerce56.apiary-mock.com/',
  headers: {
    'content-type': 'application/merge-patch+json'
  }
})

export default api
