import axios from 'axios'

export const getName = () => {
  return axios.get('/api/data/sns/pc_seize_banner')
}
export const getFlare = () => {
  return axios.get('./config/flare.json')
}
