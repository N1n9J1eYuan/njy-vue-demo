import axios from 'axios'

export const getName = () => {
  return axios.get('/api/data/sns/pc_seize_banner')
}

export const getFlare = () => {
  return axios.get('./config/flare.json')
}

export const userLogin = (params) => {
  return axios.get('/users/login', { params })
}

export const getRoles = () => {
  return axios.get('/roles')
}
