import axios from 'axios'

export const postUserInfo = (params) => {
  return axios.post('/api/data/sns/pc_seize_banner', params)
}

export const addRoles = (params) => {
  return axios.post('/roles', params)
}
