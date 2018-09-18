import axios from 'axios'

export const changeRoles = (params) => {
  return axios.put('/roles/' + params.id, {name: params.name, id: params.id})
}
