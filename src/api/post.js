import axios from 'axios'

export const addRoles = (params) => {
  return axios.post('/roles', params)
}
