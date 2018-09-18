import axios from 'axios'
import * as get from './get'
import * as post from './post'
import * as put from './put'
import * as deletes from './delete'

axios.interceptors.request.use(
  config => {
    const token = 'asfnhyuiw889kjnggn'
    if (token) {
      config.headers.token = token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  get,
  post,
  put,
  deletes
}
