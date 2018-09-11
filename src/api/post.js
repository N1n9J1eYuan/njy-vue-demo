import axios from 'axios'

export const postUserInfo = (data) => {
  return axios.post('/api/data/sns/pc_seize_banner', data)
}
