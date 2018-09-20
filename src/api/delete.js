import axios from 'axios'

export const deleteRoles = (params) => {
  return axios.delete('/roles/' + params.id)
}

export const deleteDepartments = (params) => {
  return axios.delete('/departments/' + params.id)
}
