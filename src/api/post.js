import axios from 'axios'

export const addRoles = (params) => {
  return axios.post('/roles', params)
}

export const addDepartments = (params) => {
  return axios.post('/departments', params)
}
