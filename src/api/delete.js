import axios from 'axios'

export const deleteRoles = (params) => {
  return axios.delete('/roles/' + params.id)
}
